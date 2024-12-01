import { useState, useEffect } from "react";
import "./App.css";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "./lib/utils";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import { Checkbox } from "./components/ui/checkbox";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import Papa from "papaparse";
import TableData from "./TableData";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import { countries, levels, vendors, types } from "./variables";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

function App() {
  const [open, setOpen] = useState(false);
  const [csvData, setCsvData] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("/data.csv")
      .then((response) => response.text())
      .then((data) => {
        Papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setCsvData(results.data);
          },
        });
      })
      .catch((error) => {
        console.error("Lỗi khi tải file CSV:", error);
      });
  }, []);

  const form = useForm({
    defaultValues: {
      vendors: ["Visa", "Mastercard"],
      levels: [],
      types: ["Credit", "Debit"],
      bankname: "",
      base: "",
    },
  });
  const onSubmit = (data) => {
    let bins = [];
    if (data.bins != undefined) {
      bins = data.bins
        .split("\n")
        .filter((line) => line.trim() !== "")
        .map(Number)
        .filter((num) => !isNaN(num));
    }

    const { vendors, types, levels } = data;
    if (data.country === "All countries") {
      data.country = "";
    }
    const conditions = [
      { key: "Category", pattern: levels },
      { key: "Issuer", pattern: data.bankname },
      { key: "CountryName", pattern: data.country },
      { key: "Type", pattern: types },
      { key: "BIN", pattern: bins },
      { key: "Brand", pattern: vendors },
    ];

    function getFilterData(data, conditions, limit = 5000) {
      const results = [];
      for (const row of data) {
        const isMatch = conditions.every(({ key, pattern }) => {
          if (Array.isArray(pattern) && pattern.length > 0) {
            return pattern.some((p) => new RegExp(p, "i").test(row[key]));
          } else {
            const regex = new RegExp(pattern, "i");
            return regex.test(row[key]);
          }
        });

        if (isMatch) {
          results.push({ ...row, quantity: "" });
        }

        if (results.length >= limit) {
          break;
        }
      }
      return results;
    }
    const filterData = getFilterData(csvData, conditions, 5000);

    function getQuantityBin(lines, jsonData) {
      const binMap = new Map();

      lines.forEach((line) => {
        const parts = line.trim().split(/\s+/);

        if (parts.length > 1) {
          const bin = parts[0];
          const quantity = parseInt(parts[1]);

          if (binMap.has(bin)) {
            binMap.set(bin, binMap.get(bin) + quantity);
          } else {
            binMap.set(bin, quantity);
          }
        }
      });

      const results = Array.from(binMap, ([bin, quantity]) => ({
        bin,
        quantity,
      }));
      const foundBinsInfo = results
        .filter((inputBin) => {
          const entry = jsonData.find((entry) => entry.BIN === inputBin.bin);
          return entry;
        })
        .map((inputBin) => {
          const entry = jsonData.find((entry) => entry.BIN === inputBin.bin);
          return {
            ...entry,
            quantity: inputBin.quantity,
          };
        });
      return foundBinsInfo;
    }
    if (data.base != "") {
      const lines = data.base.split("\n");
      if (lines.length > 200) {
        const quantityBin = getQuantityBin(lines, filterData);
        setTableData(quantityBin);
      } else {
        const quantityBin = getQuantityBin(lines, csvData);
        setTableData(quantityBin);
      }
    } else {
      setTableData(filterData);
    }
  };

  const handleFileUpload = (event, form) => {
    const files = event.target.files;
    let results = "";

    let promises = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type === "text/plain") {
        const reader = new FileReader();
        const promise = new Promise((resolve, reject) => {
          reader.onload = () => {
            results += `${reader.result}\n`;
            resolve();
          };
          reader.onerror = () => reject(reader.error);
          reader.readAsText(file);
        });
        promises.push(promise);
      }
    }

    Promise.all(promises)
      .then(() => {
        form.setValue("base", results);
      })
      .catch((error) => console.error("Error reading files:", error));
  };
  return (
    <>
      <div className="pt-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-4 border-separate border-spacing-2 border border-slate-400 p-2 w-full">
              <div className="col-span-1 flex flex-col ">
                <p className="mb-2 font-medium">Bin</p>
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="bins"
                    render={({ field }) => (
                      <FormItem className="flex h-full">
                        <FormControl>
                          <Textarea className="flex-1 resize-none" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="mb-2">
                  <p className="mb-2 font-medium">Vendor</p>
                  <div className="flex flex-col gap-2">
                    <FormField
                      control={form.control}
                      name="vendors"
                      render={() => (
                        <FormItem>
                          {vendors.map((vendor) => (
                            <FormField
                              key={vendor.id}
                              control={form.control}
                              name="vendors"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={vendor.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(
                                          vendor.label
                                        )}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                                ...field.value,
                                                vendor.label,
                                              ])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) =>
                                                    value !== vendor.label
                                                )
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-medium">
                                      {vendor.label}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <p className="font-medium">Type</p>
                  <FormField
                    control={form.control}
                    name="types"
                    render={() => (
                      <FormItem className="flex items-center gap-1.5 space-y-0">
                        {types.map((type) => (
                          <FormField
                            key={type.id}
                            control={form.control}
                            name="types"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={type.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(
                                        type.label
                                      )}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              type.label,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== type.label
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-medium">
                                    {type.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <p className="mb-2 font-medium">Level</p>
                <FormField
                  control={form.control}
                  name="levels"
                  render={() => (
                    <FormItem>
                      <div className="grid grid-cols-2 gap-y-2">
                        {levels.map((level) => (
                          <FormField
                            key={level.id}
                            control={form.control}
                            name="levels"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={level.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(
                                        level.label
                                      )}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              level.label,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== level.label
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-medium">
                                    {level.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <div className="">
                  <p className="mb-2 font-medium">Region</p>
                  <div className=" flex flex-col gap-2">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="bankname">Bankname</Label>
                      <FormField
                        control={form.control}
                        name="bankname"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                autoComplete="off"
                                id="bankname"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="country">Country</Label>
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <Popover open={open} onOpenChange={setOpen}>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className={cn(
                                      "justify-between",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value
                                      ? countries.find(
                                          (country) =>
                                            country.label === field.value
                                        )?.label
                                      : "All countries"}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="p-0">
                                <Command>
                                  <CommandInput placeholder="Search language..." />
                                  <CommandList>
                                    <CommandEmpty>
                                      No language found.
                                    </CommandEmpty>
                                    <CommandGroup>
                                      {countries.map((country) => (
                                        <CommandItem
                                          value={country.label}
                                          key={country.label}
                                          onSelect={() => {
                                            form.setValue(
                                              "country",
                                              country.label
                                            );
                                            setOpen(false);
                                          }}
                                        >
                                          {country.label}
                                          <Check
                                            className={cn(
                                              "ml-auto",
                                              country.label === field.value
                                                ? "opacity-100"
                                                : "opacity-0"
                                            )}
                                          />
                                        </CommandItem>
                                      ))}
                                    </CommandGroup>
                                  </CommandList>
                                </Command>
                              </PopoverContent>
                            </Popover>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="const">Base</Label>
                      <FormField
                        control={form.control}
                        name="base"
                        render={({
                          field: { value, onChange, ...fieldProps },
                        }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="file"
                                multiple
                                accept=".txt"
                                onChange={(event) => {
                                  onChange(handleFileUpload(event, form));
                                }}
                                {...fieldProps}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button className="mt-2 mb-2" type="submit">
              Submit
            </Button>
          </form>
        </Form>
        <TableData data={tableData} />
      </div>
    </>
  );
}

export default App;

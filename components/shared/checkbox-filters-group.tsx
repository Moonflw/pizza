import { log } from "console";
import { Input } from "../ui";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";


type Item = FilterChecboxProps;
interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValues?: string[];
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = (
    {
        title,
        items,
        defaultItems,
        limit = 5,
        searchInputPlaceholder = "Поиск...",
        className,
        onChange,
        defaultValues,
    }
) => {
  return (
    <div className={className}>
        <p className="font-bold mb-3">{title}</p>

        <div className="mb-5">
            <Input placeholder={searchInputPlaceholder} className="bg-gray-50 border-none"/>
        </div>

        <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
            {items.map((item, index) => (
                <FilterCheckbox
                 key={index}
                 text={item.text}
                 value={item.value}
                 endAdornment={item.endAdornment}
                 checked={false}
                 onCheckedChange={(ids) => {log(ids)}}
                />
            ))}
        </div>
    </div>
  );
};
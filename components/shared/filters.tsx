import { Check } from "lucide-react";
import { Input } from "../ui";
import { FilterCheckbox } from "./filter-checkbox";
import { RangeSlider } from "./range-slider";
import { Title } from "./title";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <Title text="Фильтрация" size="sm" className="mb-5 font-bold"/>
        {/* Верхние чекбоксы */}
        <div className="flex flex-col gap-4">
            <FilterCheckbox text="Можно собирать" value="1" />
            <FilterCheckbox text="Новинки" value="2" />
        </div>
        {/* Фильтр цен */}
        <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
            <p className="font-bold mb-3">Цена от и до:</p>
            <div className="flex gap-3 mb-5">
                <Input type="number"  placeholder="0" min={0} max={1000} defaultValue={0} />
                <Input type="number" min={100} max={10000} placeholder="10000" />
            </div>

            <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
        </div>

        <CheckboxFiltersGroup 
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
            {
                text:"Сырный соус",
                value:"1",
            },
            {
                text: "Моццарелла",
                value:"2", 
            },
            ]}
/>
    </div>
  );
};
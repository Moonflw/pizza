import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return <>
    <Container className="mt-10">
      <Title text="Все пиццы" size="lg" className="font-extrabold" />
    </Container>
    <TopBar />

    <Container className="mt-10 pb-14">
      <div className="flex gap-[80px]">

        {/* Фильтрация */}
        <div className="w-[250px]">
          <Filters />
        </div>

        {/* Список товаров */}

        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductsGroupList title="Все" categoryId={1} items={[
              {
                id: 1,
                name: "Nice Пицца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF929C33D142CCBCB50A5130889E0A.avif",
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 2,
                name: "Nice Пицца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF929C33D142CCBCB50A5130889E0A.avif",
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 3,
                name: "Nice Пицца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF929C33D142CCBCB50A5130889E0A.avif",
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 4,
                name: "Nice Пицца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF929C33D142CCBCB50A5130889E0A.avif",
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 5,
                name: "Nice Пицца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF929C33D142CCBCB50A5130889E0A.avif",
                price: 550,
                items: [{ price: 550 }],
              },
            ]} />

            <ProductsGroupList title="Пиццы" items={[
              {
                id: 1,
                name: "Nice Пицца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF929C33D142CCBCB50A5130889E0A.avif",
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 2,
                name: "Nice Пицца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF929C33D142CCBCB50A5130889E0A.avif",
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 3,
                name: "Nice Пицца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF929C33D142CCBCB50A5130889E0A.avif",
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 4,
                name: "Nice Пицца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF929C33D142CCBCB50A5130889E0A.avif",
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 5,
                name: "Nice Пицца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF929C33D142CCBCB50A5130889E0A.avif",
                price: 550,
                items: [{ price: 550 }],
              },
            ]} categoryId={2} />
          </div>
        </div>
      </div>
    </Container>
  </>;
}

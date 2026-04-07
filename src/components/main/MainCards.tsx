import { Category } from "../../interfaces/data.interfaces";
import Card from "../Card";

function MainCards({
	filteredCategories,
	activeLang,
	searchQuery,
}: {
	filteredCategories: any;
	activeLang: any;
	searchQuery: string;
}) {
	return (
		<div className='main-content-cards'>
			{filteredCategories.length > 0 ?
				filteredCategories.map((cat: Category, idx: number) => (
					<div
						key={idx}
						className='main-content-cards-category'>
						<h3>
							<span
								style={{
									background: activeLang.color,
								}}></span>
							{cat.name}
						</h3>
						<div className='main-content-cards-category-items'>
							{cat.items.map((item, i) => (
								<Card
									key={i}
									item={item}
									color={activeLang.color}
								/>
							))}
						</div>
					</div>
				))
			:	<p className='main-message-empty'>
					{searchQuery ?
						`No se encontraron resultados para "${searchQuery}"`
					:	`No hay contenido en esta categoría.`}
				</p>
			}
		</div>
	);
}

export default MainCards;

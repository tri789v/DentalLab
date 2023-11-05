import React from "react"
import { formatToVnd } from "../utils/NumberFormat";
import LocalStorageUtils from "../utils/LocalStorageUtils";

export const Card = (props) => (
    <a key={props.cardItem.id} href={`/categories/${props.cardItem.id}`} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border shadow-md">
            <img
                src={props.cardItem.image || "https://www.brookwestfamilydentistry.com/wp-content/uploads/2018/08/Veneers-1.jpg"}
                alt={`category-${props.cardItem.id}`}
                className="h-64 w-full object-cover object-center "
            />
        </div>
        <h3 className="mt-1 text-lg font-medium text-gray-900">{props.cardItem.categoryName}</h3>
    </a>
)

export const CardProduct = (props) => {

    const { role } = LocalStorageUtils.getCurrentUser() || "guest";

    const renderPrice = () => {
        if (role && role.toLowerCase() !== "guest") {
            return (<p className="mt-1 text-lg font-medium text-gray-900">{formatToVnd(props.cardItem.costPrice, 'VND')}</p>
            )
        }
    }

    return (
        <>
            <div key={props.cardItem.productId} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                        src="https://www.brookwestfamilydentistry.com/wp-content/uploads/2018/08/Veneers-1.jpg"
                        alt={`product-${props.cardItem.id}`}
                        className="h-64 w-full object-cover object-center "
                    />
                </div>

                <h3 className="mt-4 text-sm text-gray-700">{props.cardItem.name}</h3>
                {renderPrice()}
            </div>

        </>

    );
}
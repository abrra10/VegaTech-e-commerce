import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { TagIcon } from "@heroicons/react/24/outline";

export default function EcommerceCard({ item, layout }) {
  // Conditional class for CardHeader based on layout
  const cardHeaderHeight =
    layout === "featured"
      ? "h-96 md:h-[400px]"
      : "h-40 md:h-[360px] lg:h-[360px]"; // Larger height for featured products

  return (
    <Link to={`/product/${item.id}`} className="relative block">
      <Card className="w-95 pb-2 relative shadow-none mb-4">
        {item?.attributes?.isNew && (
          <span className="absolute top-2 left-2 bg-white text-teal-600 px-3 py-1 text-xs font-medium rounded-lg shadow-md">
            <TagIcon className="w-4 h-4 inline mr-1 z-10" />
            New Arrival
          </span>
        )}
        <CardHeader shadow={false} floated={false} className={cardHeaderHeight}>
          <img
            src={`${import.meta.env.VITE_UPLOAD_URL}${
              item?.attributes?.img?.data?.attributes?.url
            }`}
            alt={item?.attributes?.title}
            className="h-full w-full object-cover"
          />
        </CardHeader>

        <CardBody>
          <div className="mb-2 text-xs md:text-base flex flex-col md:flex-row md:items-center md:justify-between gap-y-1">
            <Typography
              color="blue-gray"
              className="font-bold w-full md:w-[150px] truncate"
            >
              {item?.attributes?.title}
            </Typography>
            <Typography
              color="blue-gray"
              className="font-bold w-full md:w-[100px] text-left md:text-right"
            >
              {item?.attributes?.price} DA
            </Typography>
          </div>

          <Typography
            variant="small"
            color="gray"
            className="font-medium opacity-75 line-clamp-3 truncate md:text-ellipsis min-h-[64px] mb-0"
          >
            {item?.attributes?.desc}
          </Typography>
        </CardBody>

        <CardFooter className="-mt-2 pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 font-Secondary shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Voir le produit
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

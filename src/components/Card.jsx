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

export default function EcommerceCard({ item }) {
  return (
    <Link to={`/product/${item.id}`} className="relative block">
      <Card className="w-95  pb-2 relative shadow-none mb-4">
        {item?.attributes?.isNew && (
          <span className="absolute top-2 left-2 bg-white text-teal-600 px-3 py-1 text-xs font-medium rounded-lg shadow-md">
            <TagIcon className="w-4 h-4 inline mr-1 z-10" />
            New Arrival
          </span>
        )}
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={`${import.meta.env.VITE_UPLOAD_URL}${
              item?.attributes?.img?.data?.attributes?.url
            }`}
            alt={""}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-bold">
              {item?.attributes?.title}
            </Typography>
            <Typography color="blue-gray" className="font-bold">
              {item?.attributes?.price} DA
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-medium opacity-75 line-clamp-3 min-h-[64px]"
          >
            {item?.attributes?.desc}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
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

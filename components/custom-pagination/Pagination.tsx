import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  currentPage: number;
  pageSize: number;
  handleChangePage: (pageNumber: number) => void;
  isShow?: boolean;
  totalItems?: number;
  className?: string;
}
export default function Pagination({
  currentPage,
  pageSize,
  handleChangePage,
  totalItems,
  isShow = false,
  className = "",
}: Props) {
  const page = Number(currentPage);
  const startItem = (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, totalItems || 0);
  const range = 2;
  const renderPagination = () => {
    let dotAfter = false;
    let dotBefore = false;
    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true;
        return (
          <span
            key={index}
            className="flex items-center justify-center px-3 py-2 mx-2 bg-white "
          >
            ...
          </span>
        );
      }
    };
    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true;
        return (
          <span
            key={index}
            className="flex items-center justify-center px-3 py-2 mx-2 bg-white "
          >
            ...
          </span>
        );
      }
    };
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1;
        if (
          page <= range * 2 + 1 &&
          pageNumber > page + range &&
          pageNumber < pageSize - range + 1
        ) {
          return renderDotAfter(index);
        } else if (page > range * 2 + 1 && page < pageSize - 2 * range) {
          if (range < pageNumber && pageNumber < page - range) {
            return renderDotBefore(index);
          }
          if (page + range < pageNumber && pageNumber < pageSize - range + 1) {
            return renderDotAfter(index);
          }
        } else if (
          page > pageSize - 2 * range - 1 &&
          range < pageNumber &&
          pageNumber < page - range
        ) {
          return renderDotBefore(index);
        }
        return (
          <div
            key={index}
            className={cn(
              "flex items-center justify-center px-3 py-1 mx-2 bg-white cursor-pointer border rounded-full",
              {
                "border-cyan-500": pageNumber === page,
                "border-gray-100": pageNumber !== page,
              }
            )}
            onClick={() => handleChangePage(pageNumber)}
          >
            {pageNumber}
          </div>
        );
      });
  };
  return (
    <div className={`flex flex-wrap items-center justify-end ${className}`}>
      {isShow && (
        <div className="text-sm text-gray-600">
          {startItem} - {endItem} of {totalItems}
        </div>
      )}
      {page === 1 ? (
        <span className="flex items-center justify-center px-3 py-1 mx-2   cursor-not-allowed">
          <ChevronLeft stroke="gray" width={28} height={28} />
        </span>
      ) : (
        <div
          onClick={() => handleChangePage(page - 1)}
          className="flex items-center justify-center px-3 py-1 mx-2 bg-white  cursor-pointer"
        >
          <ChevronLeft stroke="black" width={28} height={28} />
        </div>
      )}

      {!isShow && renderPagination()}
      {page === pageSize ? (
        <span className="flex items-center justify-center px-3 py-1 mx-2   cursor-not-allowed">
          <ChevronRight stroke="gray" width={28} height={28} />
        </span>
      ) : (
        <div
          onClick={() => handleChangePage(page + 1)}
          className="flex items-center justify-center px-3 py-1 mx-2 bg-white  cursor-pointer"
        >
          <ChevronRight stroke="black" width={28} height={28} />
        </div>
      )}
    </div>
  );
}

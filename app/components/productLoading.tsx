const ProductLoading = ({ limit }: { limit: number }) => {
  return 0 < limit ? (
    Array.from(
      Array(limit).map((elements) => {
        return (
          <div
            key={elements.id}
            className="card-border card-compact card border-gray-800"
          >
            <div className="h-60 rounded bg-gray-100" />
            <div className="card-body" />
            <div className="flex flex-col gap-4">
              <div className="h-6 rounded bg-gray-100" />
              <div className="h-6 w-5/6 rounded bg-gray-100" />
              <div className="h-6 w-1/4 rounded bg-gray-100" />
            </div>
          </div>
        );
      }),
    )
  ) : (
    <div>제품이 없습니다</div>
  );
};

export default ProductLoading;

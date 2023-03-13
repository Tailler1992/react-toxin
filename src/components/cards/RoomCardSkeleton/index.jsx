import ContentLoader from "react-content-loader";

export const RoomCardSkeleton = () => {
  return (
      <ContentLoader
          speed={2}
          width={270}
          height={263}
          viewBox="0 0 270 263"
          backgroundColor="#d9d9d9"
          foregroundColor="#ededed"
      >
        <rect x="0" y="0" rx="4" ry="4" width="270" height="263"/>
      </ContentLoader>
  );
};
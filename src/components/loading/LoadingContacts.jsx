import { MagnifyingGlass } from "spinner";

export const LoadingContacts = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};
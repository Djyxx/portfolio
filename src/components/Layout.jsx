import Navbar from "../pages/Navbar";

const Layout = (props) => {
  return (
    <div class="flex flex-col h-screen bg-[#1e1c21] text-[#9ad6a8]">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 overflow-y-auto">{props.children}</main>
    </div>
  );
};

export default Layout;

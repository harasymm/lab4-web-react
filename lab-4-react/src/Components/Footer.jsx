function Footer() {
  return (
    <footer className="bg-[#333] text-white p-5 flex flex-wrap items-center justify-center gap-4 text-center rounded-b-2xl">
      <img
        src="src/images/iktalogo.jpg"
        alt="IKTA Logo"
        className="w-[100px] h-auto rounded-full block m-0 -ml-[70px]"
      />

      <div>
        <h2 className="m-0">Lab3-web-react. LPNU WebDevelopment</h2>
        <p className="m-0">&copy; 2026 Markiian Harasym</p>
        <p className="inline-block mx-[14px] my-0 text-white">
          Contact:{" "}
          <a className="text-white underline" href="mailto:harasym@example.com">
            harasym@example.com
          </a>
        </p>
      </div>

      <img
        src="src/images/arton141.png"
        alt="LPNU Logo"
        className="w-[100px] h-auto block m-0 -mr-[70px] bg-white rounded-full"
      />
    </footer>
  );
}
export default Footer;
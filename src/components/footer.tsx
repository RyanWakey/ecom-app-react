const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <div>
            <a href="#" className="hover:underline">Privacy Centre</a> | 
            <a href="#" className="hover:underline">Returns</a> | 
            <a href="#" className="hover:underline">Product Recalls</a>
          </div>
          <div>
            <a href="#" className="hover:underline">Cookies Settings</a> | 
            <a href="#" className="hover:underline">Modern Slavery Statement</a> | 
            <a href="#" className="hover:underline">Electrical Waste Recycling</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
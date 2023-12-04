import React, { useState, useEffect } from "react";
import Header from "../../../components/Header"; // Adjust the path based on your file structure
import "./ProductCatalog.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
// Dummy data for filters

import image1 from "../../../assets/floor/image1.jpg";
import image2 from "../../../assets/floor/image2.jpg";
import image3 from "../../../assets/floor/image3.jpg";
import image4 from "../../../assets/floor/image4.jpg";
import image5 from "../../../assets/floor/image5.jpg";
import image6 from "../../../assets/floor/image6.jpg";
import image7 from "../../../assets/floor/image7.jpg";
import image8 from "../../../assets/floor/image8.jpg";
import image9 from "../../../assets/floor/image9.jpg";
import ArrowBack from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";

const filterOptions = {
  styles: ["Loop", "Pattern", "Texture"],
  colorways: ["Red", "Blue", "Green"],
  collections: ["Modern", "Classic", "Casual"],
};

// Dummy data for products
const initialProducts = [
  {
    id: 1,
    name: "Zenith Dawn II",
    collection: "Accents",
    imageUrl: image1,
    style: "Pattern",
    colorway: "Red",
  },
  {
    id: 2,
    name: "Artistic Action 1",
    collection: "Aftermath",
    imageUrl: image2,
    style: "Texture",
    colorway: "Blue",
  },
  {
    id: 3,
    name: "Artistic Action 2",
    collection: "Aftermath",
    imageUrl: image3,
    style: "Texture",
    colorway: "Blue",
  },
  {
    id: 4,
    name: "Artistic Action 3",
    collection: "Aftermath",
    imageUrl: image4,
    style: "Texture",
    colorway: "Blue",
  },
  {
    id: 5,
    name: "Artistic Action 4",
    collection: "Aftermath",
    imageUrl: image5,
    style: "Texture",
    colorway: "Blue",
  },
  {
    id: 6,
    name: "Artistic Action 5",
    collection: "Aftermath",
    imageUrl: image6,
    style: "Texture",
    colorway: "Blue",
  },
  {
    id: 7,
    name: "Artistic Action 6",
    collection: "Aftermath",
    imageUrl: image7,
    style: "Texture",
    colorway: "Blue",
  },
  {
    id: 8,
    name: "Artistic Action 7",
    collection: "Aftermath",
    imageUrl: image8,
    style: "Texture",
    colorway: "Blue",
  },
  {
    id: 9,
    name: "Artistic Action 8",
    collection: "Aftermath",
    imageUrl: image9,
    style: "Texture",
    colorway: "Blue",
  },
  // ... add more products
];

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        {title}{" "}
        <span className="accordion-arrow">
          {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </span>
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const tabsData = {
  styles: {
    count: 12,
    products: [
      {
        id: 1,
        name: "Zenith Dawn II",
        collection: "Accents",
        imageUrl: image1,
        style: "Pattern",
        colorway: "Red",
      },
      {
        id: 2,
        name: "Artistic Action 1",
        collection: "Aftermath",
        imageUrl: image2,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 3,
        name: "Artistic Action 2",
        collection: "Aftermath",
        imageUrl: image3,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 4,
        name: "Artistic Action 3",
        collection: "Aftermath",
        imageUrl: image4,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 5,
        name: "Zenith Dawn II",
        collection: "Accents",
        imageUrl: image1,
        style: "Pattern",
        colorway: "Red",
      },
      {
        id: 6,
        name: "Artistic Action 1",
        collection: "Aftermath",
        imageUrl: image2,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 7,
        name: "Artistic Action 2",
        collection: "Aftermath",
        imageUrl: image3,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 8,
        name: "Artistic Action 3",
        collection: "Aftermath",
        imageUrl: image4,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 9,
        name: "Zenith Dawn II",
        collection: "Accents",
        imageUrl: image1,
        style: "Pattern",
        colorway: "Red",
      },
      {
        id: 10,
        name: "Artistic Action 1",
        collection: "Aftermath",
        imageUrl: image2,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 11,
        name: "Artistic Action 2",
        collection: "Aftermath",
        imageUrl: image3,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 12,
        name: "Artistic Action 3",
        collection: "Aftermath",
        imageUrl: image4,
        style: "Texture",
        colorway: "Blue",
      },
      // { id: 13, name: 'Zenith Dawn II', collection: 'Accents', imageUrl: image1, style: 'Pattern', colorway: 'Red' },
      // { id: 14, name: 'Artistic Action 1', collection: 'Aftermath', imageUrl: image2, style: 'Texture', colorway: 'Blue' },
      // { id: 15, name: 'Artistic Action 2', collection: 'Aftermath', imageUrl: image3, style: 'Texture', colorway: 'Blue' },
      // { id: 16, name: 'Artistic Action 3', collection: 'Aftermath', imageUrl: image4, style: 'Texture', colorway: 'Blue' },
    ],
  },
  colorways: {
    count: 16,
    products: [
      {
        id: 1,
        name: "Artistic Action 4",
        collection: "Aftermath",
        imageUrl: image5,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 2,
        name: "Artistic Action 5",
        collection: "Aftermath",
        imageUrl: image6,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 3,
        name: "Artistic Action 6",
        collection: "Aftermath",
        imageUrl: image7,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 4,
        name: "Artistic Action 7",
        collection: "Aftermath",
        imageUrl: image8,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 5,
        name: "Zenith Dawn II",
        collection: "Accents",
        imageUrl: image1,
        style: "Pattern",
        colorway: "Red",
      },
      {
        id: 6,
        name: "Artistic Action 1",
        collection: "Aftermath",
        imageUrl: image2,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 7,
        name: "Artistic Action 2",
        collection: "Aftermath",
        imageUrl: image3,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 8,
        name: "Artistic Action 3",
        collection: "Aftermath",
        imageUrl: image4,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 9,
        name: "Zenith Dawn II",
        collection: "Accents",
        imageUrl: image1,
        style: "Pattern",
        colorway: "Red",
      },
      {
        id: 10,
        name: "Artistic Action 1",
        collection: "Aftermath",
        imageUrl: image2,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 11,
        name: "Artistic Action 2",
        collection: "Aftermath",
        imageUrl: image3,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 12,
        name: "Artistic Action 3",
        collection: "Aftermath",
        imageUrl: image4,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 13,
        name: "Zenith Dawn II",
        collection: "Accents",
        imageUrl: image1,
        style: "Pattern",
        colorway: "Red",
      },
      {
        id: 14,
        name: "Artistic Action 1",
        collection: "Aftermath",
        imageUrl: image2,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 15,
        name: "Artistic Action 2",
        collection: "Aftermath",
        imageUrl: image3,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 16,
        name: "Artistic Action 3",
        collection: "Aftermath",
        imageUrl: image4,
        style: "Texture",
        colorway: "Blue",
      },
    ],
  },
  collections: {
    count: 17,
    products: [
      {
        id: 1,
        name: "Artistic Action 5",
        collection: "Aftermath",
        imageUrl: image6,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 2,
        name: "Artistic Action 6",
        collection: "Aftermath",
        imageUrl: image7,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 3,
        name: "Artistic Action 7",
        collection: "Aftermath",
        imageUrl: image8,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 4,
        name: "Artistic Action 8",
        collection: "Aftermath",
        imageUrl: image9,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 5,
        name: "Zenith Dawn II",
        collection: "Accents",
        imageUrl: image1,
        style: "Pattern",
        colorway: "Red",
      },
      {
        id: 6,
        name: "Artistic Action 1",
        collection: "Aftermath",
        imageUrl: image2,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 7,
        name: "Artistic Action 2",
        collection: "Aftermath",
        imageUrl: image3,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 8,
        name: "Artistic Action 3",
        collection: "Aftermath",
        imageUrl: image4,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 9,
        name: "Zenith Dawn II",
        collection: "Accents",
        imageUrl: image1,
        style: "Pattern",
        colorway: "Red",
      },
      {
        id: 10,
        name: "Artistic Action 1",
        collection: "Aftermath",
        imageUrl: image2,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 11,
        name: "Artistic Action 2",
        collection: "Aftermath",
        imageUrl: image3,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 12,
        name: "Artistic Action 3",
        collection: "Aftermath",
        imageUrl: image4,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 13,
        name: "Zenith Dawn II",
        collection: "Accents",
        imageUrl: image1,
        style: "Pattern",
        colorway: "Red",
      },
      {
        id: 14,
        name: "Artistic Action 1",
        collection: "Aftermath",
        imageUrl: image2,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 15,
        name: "Artistic Action 2",
        collection: "Aftermath",
        imageUrl: image3,
        style: "Texture",
        colorway: "Blue",
      },
      {
        id: 16,
        name: "Artistic Action 3",
        collection: "Aftermath",
        imageUrl: image4,
        style: "Texture",
        colorway: "Blue",
      },
    ],
  },
};

const Tabs = ({ activeTab, setActiveTab }) => (
  <div className="tabs">
    {Object.keys(tabsData).map((category) => (
      <button
        key={category}
        className={`tab ${activeTab === category ? "active" : ""}`}
        onClick={() => setActiveTab(category)}
      >
        {category.toUpperCase()} ({tabsData[category].count})
      </button>
    ))}
  </div>
);

const ProductGrid = ({ products, nav_func }) => (
  <div className="product-grid">
    {products.map((product) => (
      <div key={product.id} className="product-tile">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <button onClick={() => nav_func(product.id)}>
            See Product Details
          </button>
        </div>
      </div>
    ))}
  </div>
);

function ProductCatalog() {
  const [activeProducts, setActiveProducts] = useState(initialProducts);
  const [activeTab, setActiveTab] = useState("styles");
  const [sortOrder, setSortOrder] = useState("Ascending");
  const productsPerPage = 4;
  const navigate = useNavigate();

  // State for storing active filters
  const [activeFilters, setActiveFilters] = useState({
    styles: [],
    colorways: [],
    collections: [],
  });

  const handleFilterChange = (filterType, value) => {
    // Here you would implement the logic to update the products based on the selected filters
    // For now, it just toggles the filter's active state
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value],
    }));
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    // Implement sorting logic here
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const [visibleCounts, setVisibleCounts] = useState({
    styles: productsPerPage,
    colorways: productsPerPage,
    collections: productsPerPage,
  });

  const showMoreProducts = () => {
    /*setVisibleCounts((prevCounts) => ({
      ...prevCounts,
      [activeTab]: prevCounts[activeTab] + productsPerPage,
    }));

    setActiveProducts(
      tabsData[activeTab].products.slice(0, visibleCounts[activeTab])
    );*/
    const newCount = visibleCounts[activeTab] + productsPerPage;

    // Update the visible counts for the active tab
    setVisibleCounts((prevCounts) => ({
      ...prevCounts,
      [activeTab]: newCount,
    }));

    // Set the active products based on the new count
    setActiveProducts(tabsData[activeTab].products.slice(0, newCount));
  };

  const showLessProducts = () => {
    // Decrease visible count and update active products
    const newCount = Math.max(
      productsPerPage,
      visibleCounts[activeTab] - productsPerPage
    );
    setVisibleCounts((prevCounts) => ({
      ...prevCounts,
      [activeTab]: newCount,
    }));
    setActiveProducts(tabsData[activeTab].products.slice(0, newCount));
  };

  // const activeProducts = tabsData[activeTab].products.slice(0, visibleCounts[activeTab]);

  useEffect(() => {
    // Reset the visible count and active products when the active tab change
    console.log("object");
    /*setVisibleCounts(productsPerPage);
    setActiveProducts(tabsData[activeTab].products.slice(0, productsPerPage));*/
    setVisibleCounts((prevCounts) => ({
      ...prevCounts,
      [activeTab]: productsPerPage,
    }));

    setActiveProducts(tabsData[activeTab].products.slice(0, productsPerPage));
  }, [activeTab]); // This effect should run when activeTab changes

  const nav_to_details_page = (prod_id) => {
    navigate(`/product-details/${prod_id}`);
  };

  return (
    <div>
      {/*<Header />*/}
      <div className="back-container">
        <Button
          type="button"
          onClick={() => navigate("/design-request-details")}
          variant="contained"
          color="primary"
        >
          Back
        </Button>
      </div>
      <div className="search-bar-container">
        <h1>CARPET TILES & PLANKS</h1>
        <div className="search-bar">
          <button>
            <SearchIcon />
          </button>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="product-page">
        <div className="sidebar">
          {Object.entries(filterOptions).map(([filterType, options]) => (
            <Accordion
              key={filterType}
              title={filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            >
              {options.map((option) => (
                <label key={option} className="filter-option">
                  <input type="checkbox" />
                  {option}
                </label>
              ))}
            </Accordion>
          ))}
        </div>
        <div className="main-content">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="results-sort">
            <span>{tabsData[activeTab].products.length} RESULTS</span>
            <div>
              <span>SORT</span>
              <select value={sortOrder} onChange={handleSortChange}>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </div>
          </div>
          <ProductGrid
            products={activeProducts}
            nav_func={nav_to_details_page}
          />

          <div className="pagination">
            <span>
              Showing {activeProducts.length} of {tabsData[activeTab].count}
            </span>
            {visibleCounts[activeTab] < tabsData[activeTab].count && (
              <button onClick={showMoreProducts} className="show-more-button">
                SHOW MORE
              </button>
            )}
            {visibleCounts[activeTab] > productsPerPage && (
              <button onClick={showLessProducts} className="show-less-button">
                SHOW LESS
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCatalog;

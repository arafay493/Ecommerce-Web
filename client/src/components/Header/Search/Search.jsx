import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
//"client\src\hooks\useFetch.js"
const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );
  if (!data) return;
  if (!query.length) {
    data = null;
  }
  // console.log(data);

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for Products"
          value={query}
          onChange={handleChange}
        />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data?.data?.map((item) => {
            const { id } = item;
            const { title, description } = item.attributes;
            const url =
              process.env.REACT_APP_DEV_URL +
              item.attributes.img.data[0].attributes.url;
            return (
              <div
                key={id}
                className="search-result-item"
                onClick={() => {
                  navigate(`/product/${item.id}`);
                  setShowSearch(false);
                }}
              >
                <div className="img-container">
                  <img src={url} alt="" />
                </div>
                <div className="prod-details">
                  <span className="name">{title}</span>
                  <span className="desc">{description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;

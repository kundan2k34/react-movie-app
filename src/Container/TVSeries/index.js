import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import CardMoviesComponents from "../../Components/CardMovies";
import PaginationComponent from "../../Components/Pagination";

import LeftListBarComponent from "../../Components/LeftListBar";
import useGenres from "../../Hooks/useGenres";

const TvSeriesContainer = () => {
  const [content, setContent] = useState([]);

  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const [pageno, setPageno] = useState(1);
  const [paginationno, setPaginationno] = useState(0);
  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;

  const genreforURL = useGenres(selectedGenres);

  const GetDataTrending = useCallback(async () => {
    try {
      const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=${pageno}&language=en-US${
        genreforURL ? `&with_genres=${genreforURL}` : ""
      }`;

      const { data } = await axios.get(url);

      setContent(data.results);
      setPaginationno(data.total_pages);
    } catch (error) {
      console.log("TV API ERROR:", error.response?.data || error.message);
    }
  }, [API_KEY, pageno, genreforURL]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    GetDataTrending();
  }, [GetDataTrending]);

  const handleClick = (number) => {
    if (!number || number < 1 || number > paginationno) return;
    setPageno(number);
  };

  return (
    <main className="homePage">
      <Container>
        <Row>
          <Col className="col-12">
            <section>
              <h1 className="txtCenter">Top Trending TV Series</h1>
              <h3 className="txtCenter"> For You</h3>
            </section>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3} lg={2}>
            <LeftListBarComponent
              genres={genres}
              selectedGenres={selectedGenres}
              setSelectedGenres={setSelectedGenres}
              setGenres={setGenres}
              type="tv"
              setPage={setPageno}
            />
          </Col>
          <Col xs={12} md={9} lg={10}>
            <Row>
              {content && content.length > 0
                ? content.map((item, index) => {
                    return (
                      <CardMoviesComponents
                        key={index}
                        data={item}
                        mediaType="tv"
                      />
                    );
                  })
                : "Loading ...."}

              {paginationno && paginationno > 1 ? (
                <PaginationComponent
                  maxnum={paginationno}
                  activenum={pageno}
                  handleClick={handleClick}
                />
              ) : (
                ""
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default TvSeriesContainer;

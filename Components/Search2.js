import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import FilmItem from "./FilmItem";

export default function Search2() {
  const [loading, setLoading] = useState(true);
  const [moviesDepart, setMoviesDepart] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [serachMovies, setSerachMovies] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/search/movie?api_key=1ea980ac470cdc5f7d274afc87a1b8fa&language=fr&query=star&page=1";
    return fetch(url)
      .then((serverPromise) => {
        serverPromise.json().then((data) => {
          setMoviesDepart([...data.results]);
          setLoading(false);
        });
      })
      .catch((error) => console.error(error));
  }, []);

  function fetchSearch() {
    const url =
      "https://api.themoviedb.org/3/search/movie?api_key=1ea980ac470cdc5f7d274afc87a1b8fa&language=fr&query=" +
      search +
      "&page=" +
      page;
    fetch(url)
      .then((serverPromise) => {
        serverPromise.json().then((data) => {
          setLoading(true);
          setMoviesDepart([]);
          setSerachMovies([...data.results]);
          setLoading(false);
        });
      })
      .catch((error) => console.error(error));
  }

  return (
    <View style={styles.main_container}>
      <TextInput
        style={styles.textinput}
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Titre du film"
      />
      <Button title="Rechercher" onPress={fetchSearch} />
      {loading ? (
        <Text>Loading....</Text>
      ) : (
        <FlatList
          data={moviesDepart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
      )}
      {loading ? (
        <Text>Loading....</Text>
      ) : (
        <FlatList
          data={serachMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

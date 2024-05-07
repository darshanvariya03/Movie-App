const data = [
    {
        id: 1,
        name: "Aquaman",
        des: "Aquaman And The Lost Movie",
        image: "https://timesofindia.indiatimes.com/photo/90355881.cms",
        rate: 5.4,
        category: 'Action',
        years: 2022,
    },
    {
        id: 2,
        name: "Hera Pheri",
        des: "Hera Pheri (2000)",
        image: "https://m.media-amazon.com/images/M/MV5BNDExMTBlZTYtZWMzYi00NmEwLWEzZGYtOTA1MDhmNTc0ODZkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        rate: 9.4,
        category: 'Comedy',
        years: 2000,
    },
    {
        id: 3,
        name: "The Covenant",
        des: "True Story",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREatc_D-4eJcnYL2rih0FVM_wVv93hTpqnRshSPeTBGw&s",
        rate: 7.3,
        category: 'War',
        years: 2023,
    },
    {
        id: 4,
        name: "Harriet",
        des: "Historical Movies of All Time to Watch",
        image: "https://hips.hearstapps.com/hmg-prod/images/best-historical-movies-harriet-1655420618.png",
        rate: 8.4,
        category: 'Story',
        years: 2020,
    },
    {
        id: 5,
        name: "American Psycho",
        des: "American Psycho Movie",
        image: "https://play-lh.googleusercontent.com/4Q4-sV3lNjEqzD7mpwMBdLljiBy5ZU24UhrK0QGdFhO7tgBbpddQBvXgSuliBAVh54Th19V0-ytKnlizwndO",
        rate: 9.4,
        category: 'Crime',
        years: 2023,
    },
    {
        id: 6,
        name: "Scream",
        des: "Aquaman And The Lost Movie",
        image: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/86/10/14/s6jo_us_2023_poster_1400x2100_nb.jpg",
        rate: 5.4,
        category: 'Horror',
        years: 2022,
    },
    {
        id: 7,
        name: "Me Before You",
        des: "Aquaman And The Lost Movie",
        image: "https://www.brides.com/thmb/eBXervXGRNFOScHEbRG8sM3vDWM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MeBeforeYou-3273ea3e643c4fd1808bf76e2f7f7fcd.jpg",
        rate: 5.4,
        category: 'Romance',
        years: 2022,
    },
    {
        id: 8,
        name: "Frozen 2",
        des: "Frozen 2",
        image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/frozen-2-et00056551-26-04-2017-07-17-17.jpg",
        rate: 5.4,
        category: 'Animation',
        years: 2022,
    },
    {
        id: 9,
        name: "Family Katta",
        des: "Family Katta Movie",
        image: "https://lh6.googleusercontent.com/proxy/aYHezyH8GX87ztwsh5SRIYZ5J5nAKftQUDa4GlQlo-fTkV37CXAmqjevXulvHIJYPaSkBgD4cnnfKDwsL2yTELbYvHzjD593nz0gshmfWPWM7grPrQd2O9Q",
        rate: 5.4,
        category: 'Family',
        years: 2022,
    },
    {
        id: 10,
        name: "The Dark Knight",
        des: "The Dark Knight Movie",
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        rate: 9.0,
        category: "Action",
        years: 2008,
    },
    {
        id: 11,
        name: "Inception",
        des: "Inception Movie",
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        rate: 8.8,
        category: "Drama",
        years: 2010,
    },
    {
        id: 12,
        name: "Pirates of the Caribbean",
        des: "The Curse of the Black Pearl Movie",
        image: "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg",
        rate: 8.0,
        category: "Adventure",
        years: 2003,
    },
    {
        id: 13,
        name: "The Shawshank Redemption",
        des: "The Shawshank Redemption Movie",
        image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        rate: 9.3,
        category: "Drama",
        years: 1994,
    },
    {
        id: 14,
        name: "The Godfather",
        des: "The Godfather Movie",
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        rate: 9.2,
        category: "Crime",
        years: 1972,
    },
    {
        id: 15,
        name: "Forrest Gump",
        des: "Forrest Gump Movie",
        image: "https://musicart.xboxlive.com/7/40025100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
        rate: 8.8,
        category: "Drama",
        years: 1994,
    },
    {
        id: 16,
        name: "The Matrix",
        des: "The Matrix Movie",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgBJGoclqi7UrGpMr3meUb_OeZd8XovrTL2HLUSds7g&s",
        rate: 8.7,
        category: "Crime",
        years: 1999,
    },
    {
        id: 17,
        name: "The Lord of the Rings",
        des: "The Fellowship of the Ring Movie",
        image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        rate: 8.8,
        category: "Family",
        years: 2001,
    },
    {
        id: 18,
        name: "Fight Club",
        des: "Fight Club Movie",
        image: "https://m.media-amazon.com/images/M/MV5BMGFlNWM0NWYtMWI3OS00OTMyLTg0YWYtNjhlNjRiYWUyZjRlXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_FMjpg_UX1000_.jpg",
        rate: 8.8,
        category: "Action",
        years: 2023,
    },
    {
        id: 19,
        name: "Gladiator",
        des: "Gladiator Movie",
        image: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        rate: 8.5,
        category: "Action",
        years: 2000,
    },
    {
        id: 20,
        name: "The Lion King",
        des: "The Lion King Movie",
        image: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_FMjpg_UX1000_.jpg",
        rate: 8.5,
        category: "Animation",
        years: 2019,
    },
    {
        id: 21,
        name: "Dhamal",
        des: "Indian Comedy Movie",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTQgEsdn-yoT7PUATzWzj37nsJcLAvXz298WZHHJ-tA&s",
        rate: 8.5,
        category: "Comedy",
        years: 2019,
    },
]


const category = [
    {
        id: 1,
        category: 'Action'
    },
    {
        id: 2,
        category: 'Comedy'
    },
    {
        id: 3,
        category: 'War'
    },
    {
        id: 4,
        category: 'Story'
    },
    {
        id: 5,
        category: 'Crime'
    },
    {
        id: 6,
        category: 'Horror'
    },
    {
        id: 7,
        category: 'Romance'
    },
    {
        id: 8,
        category: 'Animation'
    },
    {
        id: 9,
        category: 'Family'
    },
]
export { data, category }
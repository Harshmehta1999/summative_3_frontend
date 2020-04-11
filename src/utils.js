const api_url = "http://localhost:9000/api";
const designers_url = api_url + "/designers";
const categories_url = api_url + "/categories";
const artworks_url = api_url + "/artworks";
const comments_url = api_url + "/comments";


//GET DESIGN CATEGORY
const category_design_url = api_url + "/artworks/category/1";

//GET ILLUSTRATION CATEGORY
const category_illustration_url = api_url + "/artworks/category/2";

//GET PHOTOGRAPHY CATEGORY
const category_photography_url = api_url + "/artworks/category/3";

//GET PAINTINGS CATEGORY
const category_painting_url = api_url + "/artworks/category/4";





// POST
const add_artwork = api_url + "/artworks";

// POST
const add_comment = api_url + "/comments";



export {
    api_url,
    designers_url,
    categories_url,
    artworks_url,
    add_artwork,
    category_design_url,
    category_illustration_url,
    category_photography_url,
    category_painting_url,
    add_comment,
    comments_url
};
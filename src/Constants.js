export const img_Url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export function filterData(searchText,restaurantList){
    const SearchData=searchText.toLowerCase().trim();
    const Data=restaurantList.filter((rest)=>
        rest.info.name.toLowerCase().includes(SearchData)
    )
    return Data;
}
export const CallAPI=async()=>{

        const response=await fetch(`
          https://thingproxy.freeboard.io/fetch/
https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        if(!response.ok) throw new Error("API call failed");
        const data=await response.json();
        return data;
  }

  export const CallRestaurant = async (restId) => {
    try {
      const response = await fetch(
        `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.66500&lng=77.44770&restaurantId=${restId}`
      );

      if (!response.ok) {
        throw new Error(`Restaurant API call failed with status ${response.status}`);
      }

      const data = await response.json();
      if (!data?.data) {
        throw new Error("Invalid restaurant data received from API");
      }

      return data;
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      throw error; // Re-throw the error after logging it
    }
  };

// }
// export const restaurantList= [
//     {
//         "info": {
//           "id": "254130",
//           "name": "McDonald's",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/8/7cc0f931-de07-4871-be85-33a105901e8d_254130.jpg",
//           "locality": "BRS Nagar",
//           "areaName": "Raj Nagar",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "American"
//           ],
//           "avgRating": 4.6,
//           "parentId": "630",
//           "avgRatingString": "4.6",
//           "totalRatingsString": "11K+",
//           "promoted": true,
//           "adTrackingId": "cid=19206793~p=0~adgrpid=19206793#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=254130~eid=196f3fa8-925d-403d-abe4-0011e4044da5~srvts=1728043742359~collid=45995",
//           "sla": {
//             "deliveryTime": 26,
//             "lastMileTravel": 1.7,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "1.7 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-10-04 23:25:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
//                 "description": "Delivery!"
//               },
//               {
//                 "imageId": "Rxawards/_CATEGORY-Burger.png",
//                 "description": "Delivery!"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "Delivery!",
//                       "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
//                     }
//                   },
//                   {
//                     "attributes": {
//                       "description": "Delivery!",
//                       "imageId": "Rxawards/_CATEGORY-Burger.png"
//                     }
//                   }
//                 ]
//               },
//               "textExtendedBadges": {

//               },
//               "textBased": {

//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹249"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {

//               },
//               "video": {

//               }
//             }
//           },
//           "reviewsSummary": {

//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {

//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "4.2",
//               "ratingCount": "6.2K+"
//             },
//             "source": "GOOGLE",
//             "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//           "campaignId": "19206793"
//         },
//         "analytics": {

//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=254130",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         }
//       },
//       {
//         "info": {
//           "id": "340382",
//           "name": "KFC",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_340382.JPG",
//           "locality": "P And T Colony",
//           "areaName": "Raj Nagar",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Burgers",
//             "Fast Food",
//             "Rolls & Wraps"
//           ],
//           "avgRating": 4.4,
//           "parentId": "547",
//           "avgRatingString": "4.4",
//           "totalRatingsString": "4.9K+",
//           "sla": {
//             "deliveryTime": 21,
//             "lastMileTravel": 1.6,
//             "serviceability": "SERVICEABLE",
//             "slaString": "20-25 mins",
//             "lastMileTravelString": "1.6 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-10-05 03:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Rxawards/_CATEGORY-Burger.png",
//                 "description": "Delivery!"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "imageId": "Rxawards/_CATEGORY-Burger.png",
//                       "description": "Delivery!"
//                     }
//                   }
//                 ]
//               },
//               "textExtendedBadges": {

//               },
//               "textBased": {

//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹179"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {

//               },
//               "video": {

//               }
//             }
//           },
//           "reviewsSummary": {

//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {

//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {

//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=340382",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         }
//       },
//       {
//         "info": {
//           "id": "58915",
//           "name": "Domino's Pizza",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/d41badb6-1201-4c8c-8796-952bb82c832f_58915.jpg",
//           "locality": "P & T Colony",
//           "areaName": "Raj Nagar",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Pizzas",
//             "Italian",
//             "Pastas",
//             "Desserts"
//           ],
//           "avgRating": 4.5,
//           "parentId": "2456",
//           "avgRatingString": "4.5",
//           "totalRatingsString": "6.4K+",
//           "sla": {
//             "deliveryTime": 25,
//             "lastMileTravel": 2,
//             "serviceability": "SERVICEABLE",
//             "slaString": "20-25 mins",
//             "lastMileTravelString": "2.0 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-10-05 01:59:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
//                 "description": "Delivery!"
//               },
//               {
//                 "imageId": "Rxawards/_CATEGORY-Pizza.png",
//                 "description": "Delivery!"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textBased": {

//               },
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
//                       "description": "Delivery!"
//                     }
//                   },
//                   {
//                     "attributes": {
//                       "imageId": "Rxawards/_CATEGORY-Pizza.png",
//                       "description": "Delivery!"
//                     }
//                   }
//                 ]
//               },
//               "textExtendedBadges": {

//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "20% OFF",
//             "subHeader": "ABOVE ₹4000",
//             "discountTag": "FLAT DEAL"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {

//               },
//               "video": {

//               }
//             }
//           },
//           "reviewsSummary": {

//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {

//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {

//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=58915",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         }
//       },
//       {
//         "info": {
//           "id": "57276",
//           "name": "Burger King",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/b7789646-9c37-46e2-a3b3-e8ec31a8c7c1_57276.jpg",
//           "locality": "A Block",
//           "areaName": "Raj Nagar",
//           "costForTwo": "₹350 for two",
//           "cuisines": [
//             "Burgers",
//             "American"
//           ],
//           "avgRating": 4.5,
//           "parentId": "166",
//           "avgRatingString": "4.5",
//           "totalRatingsString": "30K+",
//           "sla": {
//             "deliveryTime": 24,
//             "lastMileTravel": 1.8,
//             "serviceability": "SERVICEABLE",
//             "slaString": "20-25 mins",
//             "lastMileTravelString": "1.8 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-10-05 03:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
//                 "description": "Delivery!"
//               },
//               {
//                 "imageId": "Rxawards/_CATEGORY-Burger.png",
//                 "description": "Delivery!"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textBased": {

//               },
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
//                       "description": "Delivery!"
//                     }
//                   },
//                   {
//                     "attributes": {
//                       "imageId": "Rxawards/_CATEGORY-Burger.png",
//                       "description": "Delivery!"
//                     }
//                   }
//                 ]
//               },
//               "textExtendedBadges": {

//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹99"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {

//               },
//               "video": {

//               }
//             }
//           },
//           "reviewsSummary": {

//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {

//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {

//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=57276",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         }
//       },
//       {
//         "info": {
//           "id": "834013",
//           "name": "Kailash Bhojnalaya",
//           "cloudinaryImageId": "a09f01e23a1949e98b02c937d2e3d8bb",
//           "locality": "Nehru Nagar",
//           "areaName": "Raj Nagar",
//           "costForTwo": "₹150 for two",
//           "cuisines": [
//             "Indian"
//           ],
//           "avgRating": 4.3,
//           "veg": true,
//           "parentId": "113530",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "356",
//           "promoted": true,
//           "adTrackingId": "cid=19325715~p=1~adgrpid=19325715#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=834013~eid=b8873bbd-8175-4ee1-aeef-2a55df9143e7~srvts=1728043742359~collid=45995",
//           "sla": {
//             "deliveryTime": 20,
//             "lastMileTravel": 1.8,
//             "serviceability": "SERVICEABLE",
//             "slaString": "15-20 mins",
//             "lastMileTravelString": "1.8 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-10-04 23:00:00",
//             "opened": true
//           },
//           "badges": {

//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textExtendedBadges": {

//               },
//               "textBased": {

//               },
//               "imageBased": {

//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "50% OFF",
//             "subHeader": "UPTO ₹100"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {

//               },
//               "video": {

//               }
//             }
//           },
//           "reviewsSummary": {

//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {

//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//           "campaignId": "19325715"
//         },
//         "analytics": {

//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=834013",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         }
//       },
//       {
//         "info": {
//           "id": "89916",
//           "name": "Pizza Hut",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/ceed0515-9a2b-4eb3-84bd-0aebb73fbce8_89916.jpg",
//           "locality": "RDC",
//           "areaName": "Raj Nagar",
//           "costForTwo": "₹350 for two",
//           "cuisines": [
//             "Pizzas"
//           ],
//           "avgRating": 4.4,
//           "parentId": "721",
//           "avgRatingString": "4.4",
//           "totalRatingsString": "6.7K+",
//           "sla": {
//             "deliveryTime": 25,
//             "lastMileTravel": 1.6,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "1.6 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-10-05 02:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
//                 "description": "Delivery!"
//               },
//               {
//                 "imageId": "Rxawards/_CATEGORY-Pizza.png",
//                 "description": "Delivery!"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textBased": {

//               },
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
//                       "description": "Delivery!"
//                     }
//                   },
//                   {
//                     "attributes": {
//                       "description": "Delivery!",
//                       "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                     }
//                   }
//                 ]
//               },
//               "textExtendedBadges": {

//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "50% OFF",
//             "subHeader": "UPTO ₹90"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {

//               },
//               "video": {

//               }
//             }
//           },
//           "reviewsSummary": {

//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {

//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {

//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=89916",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         }
//       },
//       {
//         "info": {
//           "id": "335050",
//           "name": "Theobroma",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/ee3e9a02-7e31-420c-bc65-01d8fead4794_335050.jpg",
//           "locality": "Astoria Boulevard",
//           "areaName": "Raj Nagar",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Bakery",
//             "Desserts"
//           ],
//           "avgRating": 4.5,
//           "parentId": "1040",
//           "avgRatingString": "4.5",
//           "totalRatingsString": "2.7K+",
//           "sla": {
//             "deliveryTime": 23,
//             "lastMileTravel": 2.3,
//             "serviceability": "SERVICEABLE",
//             "slaString": "20-25 mins",
//             "lastMileTravelString": "2.3 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-10-05 00:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
//                 "description": "Delivery!"
//               },
//               {
//                 "imageId": "Rxawards/_CATEGORY-Desserts.png",
//                 "description": "Delivery!"
//               },
//               {
//                 "imageId": "newg.png",
//                 "description": "Gourmet"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textExtendedBadges": {

//               },
//               "textBased": {

//               },
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
//                       "description": "Delivery!"
//                     }
//                   },
//                   {
//                     "attributes": {
//                       "imageId": "Rxawards/_CATEGORY-Desserts.png",
//                       "description": "Delivery!"
//                     }
//                   },
//                   {
//                     "attributes": {
//                       "imageId": "newg.png",
//                       "description": "Gourmet"
//                     }
//                   }
//                 ]
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹69"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {

//               },
//               "video": {

//               }
//             }
//           },
//           "reviewsSummary": {

//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {

//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {

//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=335050",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         }
//       },
//       {
//         "info": {
//           "id": "161161",
//           "name": "LunchBox - Meals and Thalis",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/1/037930c7-dd4c-425f-af74-66321e43c592_161161.jpg",
//           "locality": "P And T Colony",
//           "areaName": "Raj Nagar",
//           "costForTwo": "₹200 for two",
//           "cuisines": [
//             "Biryani",
//             "North Indian",
//             "Punjabi",
//             "Healthy Food",
//             "Desserts",
//             "Beverages"
//           ],
//           "avgRating": 4.3,
//           "parentId": "4925",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "3.5K+",
//           "sla": {
//             "deliveryTime": 27,
//             "lastMileTravel": 1.8,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "1.8 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-10-04 23:59:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
//                 "description": "Delivery!"
//               }
//             ],
//             "textExtendedBadges": [
//               {
//                 "iconId": "guiltfree/GF_Logo_android_3x",
//                 "shortDescription": "options available",
//                 "fontColor": "#7E808C"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textBased": {

//               },
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
//                       "description": "Delivery!"
//                     }
//                   }
//                 ]
//               },
//               "textExtendedBadges": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "iconId": "guiltfree/GF_Logo_android_3x",
//                       "description": "",
//                       "shortDescription": "options available",
//                       "fontColor": "#7E808C"
//                     }
//                   }
//                 ]
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "50% OFF",
//             "subHeader": "UPTO ₹100"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {

//               },
//               "video": {

//               }
//             }
//           },
//           "reviewsSummary": {

//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {

//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {

//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=161161",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         }
//       },
//       {
//         "info": {
//           "id": "539151",
//           "name": "Cheesecake & Co.",
//           "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
//           "locality": "Raj Nagar",
//           "areaName": "Raj Nagar",
//           "costForTwo": "₹500 for two",
//           "cuisines": [
//             "Bakery"
//           ],
//           "avgRating": 4.7,
//           "veg": true,
//           "parentId": "387417",
//           "avgRatingString": "4.7",
//           "totalRatingsString": "1.1K+",
//           "promoted": true,
//           "adTrackingId": "cid=19332503~p=2~adgrpid=19332503#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=539151~eid=2e387dee-7a03-4116-9dd5-e6972e6b1695~srvts=1728043742359~collid=45995",
//           "sla": {
//             "deliveryTime": 23,
//             "lastMileTravel": 2.3,
//             "serviceability": "SERVICEABLE",
//             "slaString": "20-25 mins",
//             "lastMileTravelString": "2.3 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-10-04 23:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "newg.png",
//                 "description": "Gourmet"
//               },
//               {
//                 "imageId": "v1695133679/badges/Pure_Veg111.png",
//                 "description": "pureveg"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textBased": {

//               },
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "imageId": "newg.png",
//                       "description": "Gourmet"
//                     }
//                   },
//                   {
//                     "attributes": {
//                       "imageId": "v1695133679/badges/Pure_Veg111.png",
//                       "description": "pureveg"
//                     }
//                   }
//                 ]
//               },
//               "textExtendedBadges": {

//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "30% OFF",
//             "subHeader": "UPTO ₹75"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {

//               },
//               "video": {

//               }
//             }
//           },
//           "reviewsSummary": {

//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {

//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "4.6",
//               "ratingCount": "67"
//             },
//             "source": "GOOGLE",
//             "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//           "campaignId": "19332503"
//         },
//         "analytics": {

//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=539151",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         }
//       },
//       {
//         "info": {
//           "id": "175730",
//           "name": "ASAP - As Spicy As Possible",
//           "cloudinaryImageId": "sg1aempqkcj8vpmtww8t",
//           "locality": "Raj Nagar",
//           "areaName": "Raj Nagar",
//           "costForTwo": "₹200 for two",
//           "cuisines": [
//             "North Indian",
//             "South Indian",
//             "Chinese",
//             "Combo",
//             "Desserts"
//           ],
//           "avgRating": 4.3,
//           "veg": true,
//           "parentId": "5284",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "3.1K+",
//           "sla": {
//             "deliveryTime": 28,
//             "lastMileTravel": 2.1,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "2.1 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-10-05 00:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "v1695133679/badges/Pure_Veg111.png",
//                 "description": "pureveg"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textBased": {

//               },
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "imageId": "v1695133679/badges/Pure_Veg111.png",
//                       "description": "pureveg"
//                     }
//                   }
//                 ]
//               },
//               "textExtendedBadges": {

//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "10% OFF",
//             "subHeader": "UPTO ₹35"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {

//               },
//               "video": {

//               }
//             }
//           },
//           "reviewsSummary": {

//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {

//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "4.3",
//               "ratingCount": "2.3K+"
//             },
//             "source": "GOOGLE",
//             "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {

//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=175730",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         }
//       },
//       {
//         "info": {
//           "id": "292232",
//           "name": "Le Winkies",
//           "cloudinaryImageId": "omcjtejhz1pkov2gifsk",
//           "locality": "RDC Concrete (India) Pvt Ltd",
//           "areaName": "Raj Nagar",
//           "costForTwo": "₹200 for two",
//           "cuisines": [
//             "Pizzas",
//             "Burgers",
//             "Pan-Asian",
//             "Beverages",
//             "Desserts",
//             "Italian",
//             "Snacks"
//           ],
//           "avgRating": 4.4,
//           "parentId": "14093",
//           "avgRatingString": "4.4",
//           "totalRatingsString": "5.9K+",
//           "sla": {
//             "deliveryTime": 27,
//             "lastMileTravel": 2,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "2.0 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-10-04 23:59:00",
//             "opened": true
//           },
//           "badges": {

//           },
//           "isOpen": true,
//           "aggregatedDiscountInfoV2": {

//           },
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textExtendedBadges": {

//               },
//               "textBased": {

//               },
//               "imageBased": {

//               }
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {

//               },
//               "video": {

//               }
//             }
//           },
//           "reviewsSummary": {

//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {

//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {

//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=292232",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         }
//       },
//       {
//         "info": {
//           "id": "71405",
//           "name": "Donald's Pastry Shop",
//           "cloudinaryImageId": "b14ce410905af6e9366e79f3386893c5",
//           "locality": "sector 10",
//           "areaName": "Raj Nagar",
//           "costForTwo": "₹600 for two",
//           "cuisines": [
//             "Desserts"
//           ],
//           "avgRating": 4.6,
//           "parentId": "13680",
//           "avgRatingString": "4.6",
//           "totalRatingsString": "14K+",
//           "sla": {
//             "deliveryTime": 17,
//             "lastMileTravel": 1.4,
//             "serviceability": "SERVICEABLE",
//             "slaString": "15-20 mins",
//             "lastMileTravelString": "1.4 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-10-04 22:45:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Rxawards/_CATEGORY-Desserts.png",
//                 "description": "Delivery!"
//               }
//             ]
//           },
//           "isOpen": true,
//           "aggregatedDiscountInfoV2": {

//           },
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textExtendedBadges": {

//               },
//               "textBased": {

//               },
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "imageId": "Rxawards/_CATEGORY-Desserts.png",
//                       "description": "Delivery!"
//                     }
//                   }
//                 ]
//               }
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {

//               },
//               "video": {

//               }
//             }
//           },
//           "reviewsSummary": {

//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {

//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {

//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=71405",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         }
//       },
//       {
//         "info": {
//           "id": "923328",
//           "name": "Cafe Elle Bee",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/8b1ee29d-dad3-455d-8a40-86587977d9b8_923328 (1).jpg",
//           "locality": "P & T Colony",
//           "areaName": "Raj Nagar",
//           "costForTwo": "₹250 for two",
//           "cuisines": [
//             "Chinese",
//             "Fast Food",
//             "Beverages",
//             "Burgers"
//           ],
//           "avgRating": 4,
//           "veg": true,
//           "parentId": "535638",
//           "avgRatingString": "4.0",
//           "totalRatingsString": "30",
//           "promoted": true,
//           "adTrackingId": "cid=19325722~p=3~adgrpid=19325722#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=923328~eid=fb15ac9e-9843-4fbb-8872-6768b3df965c~srvts=1728043742359~collid=45995",
//           "sla": {
//             "deliveryTime": 23,
//             "lastMileTravel": 1.9,
//             "serviceability": "SERVICEABLE",
//             "slaString": "20-25 mins",
//             "lastMileTravelString": "1.9 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-10-04 23:00:00",
//             "opened": true
//           },
//           "badges": {

//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textBased": {

//               },
//               "imageBased": {

//               },
//               "textExtendedBadges": {

//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "30% OFF",
//             "subHeader": "UPTO ₹75",
//             "discountTag": "POCKET HERO",
//             "discountCalloutInfo": {
//               "message": "Free Delivery",
//               "logoCtx": {
//                 "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//               }
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {

//               },
//               "video": {

//               }
//             }
//           },
//           "reviewsSummary": {

//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "isNewlyOnboarded": true,
//           "restaurantOfferPresentationInfo": {

//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//           "campaignId": "19325722"
//         },
//         "analytics": {

//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=923328",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         }
//       },
//       {
//         "info": {
//           "id": "372512",
//           "name": "Anna",
//           "cloudinaryImageId": "byci3csesqsb8bcuo5tw",
//           "locality": "sector 10",
//           "areaName": "Raj Nagar",
//           "costForTwo": "₹200 for two",
//           "cuisines": [
//             "South Indian"
//           ],
//           "avgRating": 4.2,
//           "veg": true,
//           "parentId": "33765",
//           "avgRatingString": "4.2",
//           "totalRatingsString": "959",
//           "sla": {
//             "deliveryTime": 25,
//             "lastMileTravel": 2.2,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "2.2 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-10-04 22:45:00",
//             "opened": true
//           },
//           "badges": {

//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textExtendedBadges": {

//               },
//               "textBased": {

//               },
//               "imageBased": {

//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "40% OFF",
//             "subHeader": "UPTO ₹80"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {

//               },
//               "video": {

//               }
//             }
//           },
//           "reviewsSummary": {

//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {

//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {

//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=372512",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         }
//       },
//       {
//         "info": {
//           "id": "346573",
//           "name": "Apni Veg Rasoi",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/1/e064b2a9-3cbe-43d7-8d83-e85d9fb04907_346573.jpg",
//           "locality": "RDC Concrete (India) Pvt Ltd",
//           "areaName": "Raj Nagar",
//           "costForTwo": "₹150 for two",
//           "cuisines": [
//             "Chinese"
//           ],
//           "avgRating": 4.1,
//           "veg": true,
//           "parentId": "22092",
//           "avgRatingString": "4.1",
//           "totalRatingsString": "1.3K+",
//           "sla": {
//             "deliveryTime": 27,
//             "lastMileTravel": 2.1,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "2.1 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-10-11 00:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "v1695133679/badges/Pure_Veg111.png",
//                 "description": "pureveg"
//               }
//             ],
//             "textExtendedBadges": [
//               {
//                 "iconId": "guiltfree/GF_Logo_android_3x",
//                 "shortDescription": "options available",
//                 "fontColor": "#7E808C"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textBased": {

//               },
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "imageId": "v1695133679/badges/Pure_Veg111.png",
//                       "description": "pureveg"
//                     }
//                   }
//                 ]
//               },
//               "textExtendedBadges": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "",
//                       "shortDescription": "options available",
//                       "fontColor": "#7E808C",
//                       "iconId": "guiltfree/GF_Logo_android_3x"
//                     }
//                   }
//                 ]
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "60% OFF",
//             "subHeader": "UPTO ₹125"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {

//               },
//               "video": {

//               }
//             }
//           },
//           "reviewsSummary": {

//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {

//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {

//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=346573",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         }
//       },
//       {
//         "info": {
//           "id": "220206",
//           "name": "Tikka Junction",
//           "cloudinaryImageId": "f3a9b63a2252afbb87fae394b22571e5",
//           "locality": "Shastri Nagar",
//           "areaName": "Shastri Nagar",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "North Indian",
//             "Mughlai",
//             "Tandoor"
//           ],
//           "avgRating": 4.3,
//           "parentId": "2029",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "2.8K+",
//           "sla": {
//             "deliveryTime": 29,
//             "lastMileTravel": 3,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "3.0 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-10-04 23:00:00",
//             "opened": true
//           },
//           "badges": {

//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textBased": {

//               },
//               "imageBased": {

//               },
//               "textExtendedBadges": {

//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "50% OFF",
//             "subHeader": "UPTO ₹95"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {

//               },
//               "video": {

//               }
//             }
//           },
//           "reviewsSummary": {

//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {

//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "3.9",
//               "ratingCount": "262"
//             },
//             "source": "GOOGLE",
//             "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {

//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=220206",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         }
//       }
// ];
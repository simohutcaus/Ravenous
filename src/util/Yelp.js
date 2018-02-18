const apiKey = 'qGlUUOIYMQf49kPXspW_xIvFkutnNj1fdiaBvC9tdTo1UdMtpX-V2ZEiK9CpgGuBnNWHtdctXLP1L6qoqEnytoRyp8lIfTMO5k9z8wPe0KuNGKem1Zm7By_rYkSJWnYx';
const Yelp = {
    search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    }).then (response => {
        return response.json().then( jsonResponse => {if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => (
                {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.category,
                    rating: business.rating,
                    reviewCount: business.review_count

                }))}})})}};

                export default Yelp;
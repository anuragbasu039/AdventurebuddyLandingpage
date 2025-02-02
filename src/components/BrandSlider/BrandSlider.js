// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './BrandSlider.css';
// import logo1 from '../../assets/hansraj.png';
// import logo2 from '../../assets/srgi-removebg-preview.png';
// import logo3 from '../../assets/alpine.png';
// import logo4 from '../../assets/RNS.png';
//
// const BrandSlider = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false, // Disable arrows
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//
//   const brands = [
//     { logo: logo1 },
//     { logo: logo2 },
//     { logo: logo3 },
//     { logo: logo4 },
//     { logo: logo1 },
//     { logo: logo2 },
//     { logo: logo3 },
//     { logo: logo4 },
//   ];
//
//   return (
//     <div className="brand-slider">
//       <Slider {...settings}>
//         {brands.map((brand, index) => (
//           <div key={index} className="brand-slide">
//             <img src={brand.logo} alt={`Brand ${index}`} className="brand-logo" />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };
//
// export default BrandSlider;

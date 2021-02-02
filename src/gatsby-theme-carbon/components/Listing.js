import React from "react"

// const Listing = ({ color, title, city, children }) => {
//     return (
//         <div className={`listing listing-${color}`}>
//             <div>
//                 <h3>{title}</h3>
//                 <span className={`city-name`}>{city}</span>{children}
//             </div>
//         </div>
//     )
// };

// export default Listing;

export const Listing = ({ children }) => {
    return (
        <div className="listing">
            {children}
        </div>
    )
}

export const ListingHed = ({ 
    color,
    title,
    children,
}) => {
    return (
        <div 
            className={`listing-hed listing-${color}`}>
            <h3>{title}</h3>
            {children}
        </div>
    )
};

export const ListingItem = ({
    title,
    city,
    children,
}) => {
    return (
        <div className={`listing-item`}>
            <h4 className={`listing-title`}>{title}</h4>
            <p><span className={`listing-city`}>{city} </span>{children}</p>
        </div>
    )
}
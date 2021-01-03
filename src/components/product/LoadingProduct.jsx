import React from "react"
import ContentLoader from "react-content-loader"

const LoadingProduct = (props) => {
        return (
            <ContentLoader
                className="pizza-block"
                speed={2}
                width={280}
                height={460}
                viewBox="0 0 280 460"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <circle cx="139" cy="139" r="134" />
                <rect x="5" y="297" rx="2" ry="2" width="276" height="25" />
                <rect x="7" y="331" rx="2" ry="2" width="271" height="73" />
                <rect x="8" y="429" rx="2" ry="2" width="98" height="25" />
                <rect x="152" y="415" rx="21" ry="21" width="125" height="41" />
            </ContentLoader>
    )
};

export default LoadingProduct;
import React from 'react';
import cn from "classnames";
import "./style.css";

const variantsMapping = {
    h1: "h1",
    h2: "h2",
    h6: "h6",
    subheading: "h6",
    body1: "p",
    body2: "p",
    body3: "p",
    body3bold: "p",
};

const Typography = ({ variant, color, children, ...props}) => {
    
    const Component = variant ? variantsMapping[variant] : "p";

    return (
        <Component
        className={cn({
            [`typography--variant-${variant}`]:variant,
            [`typography--color-${color}`]:color,
        })}
        {...props}
        >
            {children}
        </Component>
    );
};

export default Typography;
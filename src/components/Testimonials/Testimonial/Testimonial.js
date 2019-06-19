import React from 'react';

import Icon from '../../../hoc/Icons/Icons';

const testimonial = (props) => (
    <div key={props.index} className="testimonial-item">
        <Icon name="quote-left" />
        <blockquote>
            <p>{props.quote}</p>
            <footer>
                {props.author}
                <small>{props.rating}</small>
            </footer>
        </blockquote>
    </div>
);

export default testimonial;

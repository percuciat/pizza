import React from 'react';
import PropTypes from 'prop-types';

/*class Category extends Component {
    constructor(props) {
        super(props);
        this.changeActive = this.changeActive.bind(this)
    }
    state = {
        isActive: null,
    };
    changeActive(i) {
       this.setState({
           isActive: i
       });
    }
    render() {
        const {items} = this.props;
       return <>
           <div className="categories">
               <ul>
                   <li className="active">Все</li>
                   {
                       items?.map((elem, index) => {
                            return <li className={this.state.isActive === index ? 'active' : ''} key={`${elem}_${index}`} onClick={() => this.changeActive(index)}>{elem}</li>
                        })
                   }
               </ul>
           </div>
       </>
    }
}*/
const Category = React.memo(
    ({items, onClickCategory, activeCategory}) => {
        // const [active, setActive] = useState(null);
        const changeActive = (i) => {
            // setActive(i);
            onClickCategory(i)
        };

        return <>
            <div className="categories">
                <ul>
                    <li className={activeCategory === null ? 'active' : ''} onClick={() => changeActive(null)}>Все</li>
                    {
                        items?.map((elem, index) => {
                            return <li className={activeCategory === index ? 'active' : ''} key={`${elem}_${index}`} onClick={() => changeActive(index)}>{elem}</li>
                        })
                    }
                </ul>
            </div>
        </>
    }
);

Category.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func,
    activeCategory: PropTypes.number
};

Category.defaultProps = {
    activeCategory: null,
    items: []
};

export default Category;
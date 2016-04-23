var ReactSwipe = React.createClass({
    propTypes: {
        swipeOptions: PropTypes.shape({
            startSlide: PropTypes.number,
            speed: PropTypes.number,
            auto: PropTypes.number,
            continuous: PropTypes.bool,
            disableScroll: PropTypes.bool,
            stopPropagation: PropTypes.bool,
            swiping: PropTypes.func,
            callback: PropTypes.func,
            transitionEnd: PropTypes.func
        }),
        style: PropTypes.shape({
            container: PropTypes.object,
            wrapper: PropTypes.object,
            child: PropTypes.object
        }),
        id: PropTypes.string,
        className: PropTypes.string
    },

    defaultProps: {
        swipeOptions: {},
        style: {
            container: {
                overflow: 'hidden',
                visibility: 'hidden',
                position: 'relative'
            },

            wrapper: {
                overflow: 'hidden',
                position: 'relative'
            },

            child: {
                float: 'left',
                width: '100%',
                position: 'relative',
                transitionProperty: 'transform'
            }
        },
        className: ''
    },

    componentDidMount: function () {
        const { swipeOptions } = this.props;
        this.swipe = Swipe(this.refs.container, swipeOptions);
    },

    componentWillUnmount: function () {
        this.swipe.kill();
        this.swipe = void 0;
    },

    next: function () {
        this.swipe.next();
    },

    prev: function () {
        this.swipe.prev();
    },

    slide: function (...args) {
        this.swipe.slide(...args);
    },

    getPos: function () {
        return this.swipe.getPos();
    },

    getNumSlides: function () {
        return this.swipe.getNumSlides();
    },

    render: function () {
        const { id, className, style, children } = this.props;
        return (
            <div ref="container" id={id} className={`react-swipe-container ${className}`} style={style.container}>
                <div style={style.wrapper}>
                    {React.Children.map(children, child => {
                        return React.cloneElement(child, {style: style.child});
                    })}
                </div>
            </div>
        );
    }
});
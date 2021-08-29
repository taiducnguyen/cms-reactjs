import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import app from './reducers';
import { historyMiddleware } from './Middlewares/History.middleware';
import QuickSearch from './Components/QuickSearch';
import DynamicComponent from './Components/DynamicComponent';

window.__appstate = window.__appstate || {};
const preloadState = window.__appstate.preloadState || {};
// use the parent page's store if possible, so the iframe will share the same store with the parent context.
// this to makes for example the Reorder button in My Page page to update the state and reload the mini cart
// when reorder action happens.
const store = (window.__appstate.store =
    window.__appstate.store ||
    (window.parent.__appstate && window.parent.__appstate.store) ||
    createStore(
        app,
        preloadState,
        composeWithDevTools(applyMiddleware(thunk, historyMiddleware))
    ));

window.__appstate = {
    ...window.__appstate,
    bootstrapComponents: () => {
        // bootstrap React components, in case the HTML response we receive from the server
        // has React components. ReactDOM.render performs only an update on previous rendered
        // components and only mutate the DOM as necessary to reflect latest React element.
        bootstrapComponents();
    },
    cache: {}, // for storing cache data for current request
};

const registeredContainers = [];
const renderReact = (element, container, callback) => {
    registeredContainers.push(container);
    ReactDOM.render(element, container, callback);
};

window.onunload = () => {
    // make sure components are unmounted, redux's listener are unsubscribed
    // to fix issue with iframe navigation in IE
    registeredContainers.forEach((container) => {
        ReactDOM.unmountComponentAtNode(container);
    });
};

const bootstrapComponents = () => {
    if (document.getElementById('quickSearch')) {
        renderReact(
            <Provider store={store}>
                <QuickSearch />
            </Provider>,
            document.getElementById('quickSearch')
        );
    }

    if (document.querySelectorAll('.slider').length > 0) {
        const Slider = DynamicComponent({
            loader: () => import('./Components/Slider'),
        });
        Array.from(document.querySelectorAll('.slider')).forEach(
            (slider, index) => {
                const values = [
                    ...slider.querySelectorAll('.slider__block'),
                ].map((block) => {
                    return {
                        image: block.dataset.image,
                        url: block.dataset.url,
                        text: block.dataset.text,
                        actionText: block.dataset.actionText,
                    };
                });
                if (values.length > 0) {
                    renderReact(<Slider values={values} />, slider);
                }
            }
        );
    }
};

bootstrapComponents();

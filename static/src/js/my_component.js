
// https://codingdodo.com/create-field-widget-in-owl-odoo-16/
// https://github.com/odoo/owl/blob/master/doc/reference/app.md

odoo.define('my_library.main', function (require) {
    "use strict";

    
    const AbstractAction = require('web.AbstractAction');
    const core = require('web.core');

    const translations = {
        hello: "bonjour",
        yes: "oui",
        no: "non",
      };
    const translateFn = (str) => translations[str] || str;

    const { xml, Component, App } = owl;
    //const { xml } = owl.tags;
    
    const ROOT_TEMPLATE =  xml `
          <main class="h-full pb-14 bg-faded-green" t-name="App">
            <div class="bg-info text-center p-2">
                <b> Welcome to Odoo </b>
             </div>
          </main>
          `;
    


    class Root extends Component {
        static template = ROOT_TEMPLATE;
        static components = {};
        //state = useState({
        //  menuItems: [
        //    {
        //      id: "item-1",
        //      name: "OWL",
        //    },
        //    {
        //      id: "item-2",
        //      name: "Rollup.js",
        //    },
        //    {
        //      id: "item-3",
        //      name: "TailwindCSS",
        //    },
        //  ],
        //  selectedMenu: undefined,
        //  searchData: [
        //    { id: 1, name: "Rollup.js" },
        //    { id: 2, name: "Webpack" },
        //    { id: 3, name: "TailwindCSS" },
        //    { id: 4, name: "Bootstrap" },
        //    { id: 5, name: "Bulma" },
        //    { id: 6, name: "Snowpack" },
        //    { id: 7, name: "Astro" },
        //    { id: 8, name: "Vue" },
        //    { id: 9, name: "React" },
        //  ],
        //  selectedTechnology: undefined,
        //});
      
        //onSelectMenuItem(menuItem) {
        //  this.state.selectedMenu = menuItem;
        //}
      
        //onOptionChosen(selectedTechnology) {
        //  this.state.selectedTechnology = selectedTechnology;
        //}
      
        //toJsonString(obj) {
        //  return JSON.stringify(obj, undefined, 4);
        //}
      
        //get fullYear() {
        //  return new Date().getFullYear();
        //}
      }

    const OurAction = AbstractAction.extend({ start: function () { 
    
        //const app = new App(MyComponent, {
        //    dev: true,
        //    props: {},
        //    templates,
        //    translateFn,
        //    translatableAttributes: []
        //});
        //app.mount(document.body);
        const app = new App(Root, { dev: true, translateFn, translatableAttributes: [] });
        //app.mount(document.getElementById("app"), {});
        app.mount(document.body, {});
    }});

    //owl.utils.whenReady().then(() => {
    //    const app = new MyComponent();
    //    app.mount(document.body);
    //});

    core.action_registry.add('my_library.action', OurAction);

});


//odoo.define('my_library.main', function (require) { 
//    const AbstractAction = require('web.AbstractAction'); 
//    const core = require('web.core'); 
//    const OurAction = AbstractAction.extend({ start: function () { 
//        this.$el.html('hello'); 
//    } }); 
//    core.action_registry.add('my_library.action', OurAction); 
//});                    
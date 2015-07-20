console.log("embed.js");
// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
(function(global) {
    if(typeof(window.bokeh_embed_count) == "undefined"){
        window.bokeh_embed_count = 0;
    }
    else {
        window.bokeh_embed_count += 1;
    }
    if(window.bokeh_embed_count == 1) {
//        debugger;
    }
    var host = "";

    var staticRootUrl = "/opendatacomparison/static/";
    if (host!=""){

        staticRootUrl = "//" + host + "/bokehjs/static/";
        var bokehJSUrl = staticRootUrl + "js/bokeh.js";
    }
    else {
        bokehJSUrl = staticRootUrl +"js/bokeh.js";
    }

    var all_models = [{"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [0, 0, 0, 0, 30, 0, 0, 0, 10, 20, 0, 10, 0, 0, 0], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["US - SMC Open Checkbook - Checkbook Live Data", "US - SMC Open Checkbook - Checkbook Live Data", "US - SMC Open Checkbook - Checkbook Live Data", "US - SMC Open Checkbook - Checkbook Live Data", "US - SMC Open Checkbook - Checkbook Live Data", "US - SMC Open Checkbook - Checkbook Live Data", "US - SMC Open Checkbook - Checkbook Live Data", "US - SMC Open Checkbook - Checkbook Live Data", "US - SMC Open Checkbook - Checkbook Live Data", "US - SMC Open Checkbook - Checkbook Live Data", "US - SMC Open Checkbook - Checkbook Live Data", "US - SMC Open Checkbook - Checkbook Live Data", "US - SMC Open Checkbook - Checkbook Live Data", "US - SMC Open Checkbook - Checkbook Live Data", "US - SMC Open Checkbook - Checkbook Live Data"], "fields_in_concept": ["", "", "", "", "Category Code, Category of Government, Department Code, Department Name, Org Code, Organization Description", "", "", "", "Account Description, Acct Code", "Check Date, Check Number, Payment Amount, UNIQUE_KEY", "", "Vendor ID, Vendor Name", "", "", ""]}, "id": "50f84f8a-ad2e-4fbd-9b8b-c50954ba34ba"}, "type": "ColumnDataSource", "id": "50f84f8a-ad2e-4fbd-9b8b-c50954ba34ba"}, {"attributes": {"doc": null, "id": "5b2cc25e-00e7-4844-85b6-96acb1b04ca3"}, "type": "CategoricalTickFormatter", "id": "5b2cc25e-00e7-4844-85b6-96acb1b04ca3"}, {"attributes": {"doc": null, "id": "543465c3-f7a7-488a-be58-b3564fccd024", "factors": ["US - SMC Open Checkbook - Checkbook Live Data"]}, "type": "FactorRange", "id": "543465c3-f7a7-488a-be58-b3564fccd024"}, {"attributes": {"doc": null, "id": "dddd4b7a-3e05-4107-8add-95714430601d", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "dddd4b7a-3e05-4107-8add-95714430601d"}, {"attributes": {"plot": {"type": "Plot", "id": "03d48770-41bf-47ae-b7bd-e1bafe2b22fe"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "dc4a3d32-de9d-4f5e-9fdd-58f10d97376c", "axis": {"type": "CategoricalAxis", "id": "05355262-0241-4ab2-810d-56d6a4274e1e"}}, "type": "Grid", "id": "dc4a3d32-de9d-4f5e-9fdd-58f10d97376c"}, {"attributes": {"doc": null, "id": "5a465cef-0fb2-4d6d-ad22-4d8a128a08a4"}, "type": "CategoricalTicker", "id": "5a465cef-0fb2-4d6d-ad22-4d8a128a08a4"}, {"attributes": {"plot": {"type": "Plot", "id": "03d48770-41bf-47ae-b7bd-e1bafe2b22fe"}, "doc": null, "bounds": "auto", "id": "6f3dc566-8199-4892-ad89-fc63b06cd883", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "5b2cc25e-00e7-4844-85b6-96acb1b04ca3"}, "ticker": {"type": "CategoricalTicker", "id": "5a465cef-0fb2-4d6d-ad22-4d8a128a08a4"}, "dimension": 1}, "type": "CategoricalAxis", "id": "6f3dc566-8199-4892-ad89-fc63b06cd883"}, {"attributes": {"plot": {"type": "Plot", "id": "03d48770-41bf-47ae-b7bd-e1bafe2b22fe"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "800d2b7d-dfe4-414a-b3d5-9269f9fe9f9e", "axis": {"type": "CategoricalAxis", "id": "6f3dc566-8199-4892-ad89-fc63b06cd883"}}, "type": "Grid", "id": "800d2b7d-dfe4-414a-b3d5-9269f9fe9f9e"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "50f84f8a-ad2e-4fbd-9b8b-c50954ba34ba"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "b930ecac-2eda-4566-a401-ac42d0aca734"}, "type": "Glyph", "id": "b930ecac-2eda-4566-a401-ac42d0aca734"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "50f84f8a-ad2e-4fbd-9b8b-c50954ba34ba"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "ad766769-3dad-408a-b6e8-b12f823262bf"}, "type": "Glyph", "id": "ad766769-3dad-408a-b6e8-b12f823262bf"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "03d48770-41bf-47ae-b7bd-e1bafe2b22fe"}, "doc": null, "renderers": [], "id": "57954f24-3462-40f1-b69a-6674f3dbc843"}, "type": "HoverTool", "id": "57954f24-3462-40f1-b69a-6674f3dbc843"}, {"attributes": {"plot": {"type": "Plot", "id": "03d48770-41bf-47ae-b7bd-e1bafe2b22fe"}, "id": "fa238e19-fc71-452e-9d69-fb594779ff40", "doc": null}, "type": "ResizeTool", "id": "fa238e19-fc71-452e-9d69-fb594779ff40"}, {"attributes": {"plot": {"type": "Plot", "id": "03d48770-41bf-47ae-b7bd-e1bafe2b22fe"}, "id": "c5b3679c-9018-481d-8a73-acbe29f045db", "doc": null}, "type": "PreviewSaveTool", "id": "c5b3679c-9018-481d-8a73-acbe29f045db"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "dddd4b7a-3e05-4107-8add-95714430601d"}, "y_range": {"type": "FactorRange", "id": "543465c3-f7a7-488a-be58-b3564fccd024"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "05355262-0241-4ab2-810d-56d6a4274e1e"}, {"type": "Grid", "id": "dc4a3d32-de9d-4f5e-9fdd-58f10d97376c"}, {"type": "CategoricalAxis", "id": "6f3dc566-8199-4892-ad89-fc63b06cd883"}, {"type": "Grid", "id": "800d2b7d-dfe4-414a-b3d5-9269f9fe9f9e"}, {"type": "Glyph", "id": "b930ecac-2eda-4566-a401-ac42d0aca734"}, {"type": "Glyph", "id": "ad766769-3dad-408a-b6e8-b12f823262bf"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "03d48770-41bf-47ae-b7bd-e1bafe2b22fe", "title": null, "tools": [{"type": "HoverTool", "id": "57954f24-3462-40f1-b69a-6674f3dbc843"}, {"type": "ResizeTool", "id": "fa238e19-fc71-452e-9d69-fb594779ff40"}, {"type": "PreviewSaveTool", "id": "c5b3679c-9018-481d-8a73-acbe29f045db"}], "canvas_width": 1200}, "type": "Plot", "id": "03d48770-41bf-47ae-b7bd-e1bafe2b22fe"}, {"attributes": {"doc": null, "id": "caba0ee6-df85-467c-b743-13bbe85ce3e9"}, "type": "CategoricalTickFormatter", "id": "caba0ee6-df85-467c-b743-13bbe85ce3e9"}, {"attributes": {"doc": null, "id": "39badeed-ca89-4c1f-bf91-68e8092caaa6"}, "type": "CategoricalTicker", "id": "39badeed-ca89-4c1f-bf91-68e8092caaa6"}, {"attributes": {"plot": {"type": "Plot", "id": "03d48770-41bf-47ae-b7bd-e1bafe2b22fe"}, "doc": null, "bounds": "auto", "id": "05355262-0241-4ab2-810d-56d6a4274e1e", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "caba0ee6-df85-467c-b743-13bbe85ce3e9"}, "ticker": {"type": "CategoricalTicker", "id": "39badeed-ca89-4c1f-bf91-68e8092caaa6"}, "dimension": 0}, "type": "CategoricalAxis", "id": "05355262-0241-4ab2-810d-56d6a4274e1e"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "03d48770-41bf-47ae-b7bd-e1bafe2b22fe"}], "id": "e06bc032-c061-498c-b93d-8e935a4c1ade"}, "type": "PlotContext", "id": "e06bc032-c061-498c-b93d-8e935a4c1ade"}];
    var modeltype = "PlotContext";
    var elementid = "5b6a45af-847e-486b-9729-95e67eeb8294";
    var plotID = "03d48770-41bf-47ae-b7bd-e1bafe2b22fe";
    var dd = {};
    dd[plotID] = all_models;
    

    var secondPlot =                 function() {
        console.log("Bokeh.js loaded callback");
        embed_core = Bokeh.embed_core;
        console.log("embed_core loaded");
        embed_core.injectCss(staticRootUrl);
        Bokeh.HasProperties.prototype.sync = Backbone.sync
        embed_core.search_and_plot(dd);
        console.log("search_and_plot called", new Date());}

    function addEvent(el, eventName, func){
        if(el.attachEvent){
            return el.attachEvent('on' + eventName, func);}
        else {
            el.addEventListener(eventName, func, false);}}
    var script_injected = !(typeof(_embed_bokeh_inject_application) == "undefined") && _embed_bokeh_inject_application;
    //var script_injected = !(typeof(_embed_bokeh_inject_application) == "undefined");
    if(typeof Bokeh == "object"){
        // application.js is already loaded
        console.log("bokeh.js is already loaded, going straight to plotting");
        setTimeout(function () {
            embed_core = Bokeh.embed_core;
            console.log("calling embed_core.search_and_plot, from already loaded bokehjs state")
            embed_core.search_and_plot(dd);}, 20);}

    else if(!script_injected){
        // bokeh.js isn't loaded and it hasn't been scheduled to be injected
        var s = document.createElement('script');
        s.async = true; s.src = bokehJSUrl; s.id="bokeh_script_tag";
        
    }
    else {
        var s = document.getElementById("bokeh_script_tag");
    }
    var local_bokeh_embed_count = window.bokeh_embed_count;
    if(typeof(s) != "undefined") {
    addEvent(
        s,'load',
        function() {
            setTimeout(secondPlot, 20 * local_bokeh_embed_count);});
    }
    if(!script_injected){
        document.body.appendChild(s);
    }

    _embed_bokeh_inject_application = true;

    window._embed_bokeh = true;}(this));
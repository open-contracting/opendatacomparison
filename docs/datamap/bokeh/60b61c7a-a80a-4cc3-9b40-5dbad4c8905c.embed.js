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

    var all_models = [{"attributes": {"doc": null, "id": "3290f066-c752-4e9b-a63b-5af8f51a2082", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "3290f066-c752-4e9b-a63b-5af8f51a2082"}, {"attributes": {"doc": null, "id": "a64b7fd0-2a0a-40ba-9d89-a9b139ccdaa4", "factors": ["CL - MercadoPublico.cl - Published Tenders "]}, "type": "FactorRange", "id": "a64b7fd0-2a0a-40ba-9d89-a9b139ccdaa4"}, {"attributes": {"doc": null, "id": "397c36f1-afa0-40ec-8080-c4401f525776"}, "type": "CategoricalTickFormatter", "id": "397c36f1-afa0-40ec-8080-c4401f525776"}, {"attributes": {"doc": null, "id": "0f9abef1-0c49-459b-a85b-96e0f56a8162"}, "type": "CategoricalTicker", "id": "0f9abef1-0c49-459b-a85b-96e0f56a8162"}, {"attributes": {"plot": {"type": "Plot", "id": "60b61c7a-a80a-4cc3-9b40-5dbad4c8905c"}, "doc": null, "bounds": "auto", "id": "5132e1c9-7515-4942-9fa0-5bb858835d66", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "397c36f1-afa0-40ec-8080-c4401f525776"}, "ticker": {"type": "CategoricalTicker", "id": "0f9abef1-0c49-459b-a85b-96e0f56a8162"}, "dimension": 0}, "type": "CategoricalAxis", "id": "5132e1c9-7515-4942-9fa0-5bb858835d66"}, {"attributes": {"plot": {"type": "Plot", "id": "60b61c7a-a80a-4cc3-9b40-5dbad4c8905c"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "db4cb0b9-912c-4512-a638-f4ffa5d099cf", "axis": {"type": "CategoricalAxis", "id": "5132e1c9-7515-4942-9fa0-5bb858835d66"}}, "type": "Grid", "id": "db4cb0b9-912c-4512-a638-f4ffa5d099cf"}, {"attributes": {"doc": null, "id": "ef8d12cc-908d-4cdf-a13f-9bcc814b2808"}, "type": "CategoricalTickFormatter", "id": "ef8d12cc-908d-4cdf-a13f-9bcc814b2808"}, {"attributes": {"doc": null, "id": "5efdabda-b7fb-46f6-ae2a-f090d54b261a"}, "type": "CategoricalTicker", "id": "5efdabda-b7fb-46f6-ae2a-f090d54b261a"}, {"attributes": {"plot": {"type": "Plot", "id": "60b61c7a-a80a-4cc3-9b40-5dbad4c8905c"}, "doc": null, "bounds": "auto", "id": "d9c99843-33aa-49fc-b7e4-86c7f5c13d8d", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "ef8d12cc-908d-4cdf-a13f-9bcc814b2808"}, "ticker": {"type": "CategoricalTicker", "id": "5efdabda-b7fb-46f6-ae2a-f090d54b261a"}, "dimension": 1}, "type": "CategoricalAxis", "id": "d9c99843-33aa-49fc-b7e4-86c7f5c13d8d"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [0, 0, 0, 0, 10, 0, 0, 0, 50, 0, 0, 0, 5, 10, 5], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["CL - MercadoPublico.cl - Published Tenders ", "CL - MercadoPublico.cl - Published Tenders ", "CL - MercadoPublico.cl - Published Tenders ", "CL - MercadoPublico.cl - Published Tenders ", "CL - MercadoPublico.cl - Published Tenders ", "CL - MercadoPublico.cl - Published Tenders ", "CL - MercadoPublico.cl - Published Tenders ", "CL - MercadoPublico.cl - Published Tenders ", "CL - MercadoPublico.cl - Published Tenders ", "CL - MercadoPublico.cl - Published Tenders ", "CL - MercadoPublico.cl - Published Tenders ", "CL - MercadoPublico.cl - Published Tenders ", "CL - MercadoPublico.cl - Published Tenders ", "CL - MercadoPublico.cl - Published Tenders ", "CL - MercadoPublico.cl - Published Tenders "], "fields_in_concept": ["", "", "", "", "Agency, Buyer Region", "", "", "", "Category, Description, Description of product / service, Level 1, Level 2, Level 3, Name Acquisition, Quantity, UN Code, Unit of Measure", "", "", "", "Date of publication", "Closing Date, Type Acquisition", "Number Acquisition"]}, "id": "8e05d634-07e5-4c2f-81b1-ef0e7f379509"}, "type": "ColumnDataSource", "id": "8e05d634-07e5-4c2f-81b1-ef0e7f379509"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "8e05d634-07e5-4c2f-81b1-ef0e7f379509"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "c5be2f7b-ec48-4a82-b804-1dfb25fa63e1"}, "type": "Glyph", "id": "c5be2f7b-ec48-4a82-b804-1dfb25fa63e1"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "8e05d634-07e5-4c2f-81b1-ef0e7f379509"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "4324c96c-759d-47db-a487-764c0990c6f1"}, "type": "Glyph", "id": "4324c96c-759d-47db-a487-764c0990c6f1"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "60b61c7a-a80a-4cc3-9b40-5dbad4c8905c"}, "doc": null, "renderers": [], "id": "2dc6b8d4-c43f-4144-a700-ad29a86f99aa"}, "type": "HoverTool", "id": "2dc6b8d4-c43f-4144-a700-ad29a86f99aa"}, {"attributes": {"plot": {"type": "Plot", "id": "60b61c7a-a80a-4cc3-9b40-5dbad4c8905c"}, "id": "9f0e6d21-a61b-421a-8ff0-8495049f7b7e", "doc": null}, "type": "ResizeTool", "id": "9f0e6d21-a61b-421a-8ff0-8495049f7b7e"}, {"attributes": {"plot": {"type": "Plot", "id": "60b61c7a-a80a-4cc3-9b40-5dbad4c8905c"}, "id": "0aee7e93-fbb8-4b58-938c-8ac2907fce18", "doc": null}, "type": "PreviewSaveTool", "id": "0aee7e93-fbb8-4b58-938c-8ac2907fce18"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "3290f066-c752-4e9b-a63b-5af8f51a2082"}, "y_range": {"type": "FactorRange", "id": "a64b7fd0-2a0a-40ba-9d89-a9b139ccdaa4"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "5132e1c9-7515-4942-9fa0-5bb858835d66"}, {"type": "Grid", "id": "db4cb0b9-912c-4512-a638-f4ffa5d099cf"}, {"type": "CategoricalAxis", "id": "d9c99843-33aa-49fc-b7e4-86c7f5c13d8d"}, {"type": "Grid", "id": "01333631-08dc-43e0-ac34-2cab1de2730b"}, {"type": "Glyph", "id": "c5be2f7b-ec48-4a82-b804-1dfb25fa63e1"}, {"type": "Glyph", "id": "4324c96c-759d-47db-a487-764c0990c6f1"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "60b61c7a-a80a-4cc3-9b40-5dbad4c8905c", "title": null, "tools": [{"type": "HoverTool", "id": "2dc6b8d4-c43f-4144-a700-ad29a86f99aa"}, {"type": "ResizeTool", "id": "9f0e6d21-a61b-421a-8ff0-8495049f7b7e"}, {"type": "PreviewSaveTool", "id": "0aee7e93-fbb8-4b58-938c-8ac2907fce18"}], "canvas_width": 1200}, "type": "Plot", "id": "60b61c7a-a80a-4cc3-9b40-5dbad4c8905c"}, {"attributes": {"plot": {"type": "Plot", "id": "60b61c7a-a80a-4cc3-9b40-5dbad4c8905c"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "01333631-08dc-43e0-ac34-2cab1de2730b", "axis": {"type": "CategoricalAxis", "id": "d9c99843-33aa-49fc-b7e4-86c7f5c13d8d"}}, "type": "Grid", "id": "01333631-08dc-43e0-ac34-2cab1de2730b"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "60b61c7a-a80a-4cc3-9b40-5dbad4c8905c"}], "id": "3d38d563-83c6-4a76-99d9-dc4db6070c8b"}, "type": "PlotContext", "id": "3d38d563-83c6-4a76-99d9-dc4db6070c8b"}];
    var modeltype = "PlotContext";
    var elementid = "8c0c0ff9-26ac-4a27-9616-ca268a1af5f6";
    var plotID = "60b61c7a-a80a-4cc3-9b40-5dbad4c8905c";
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
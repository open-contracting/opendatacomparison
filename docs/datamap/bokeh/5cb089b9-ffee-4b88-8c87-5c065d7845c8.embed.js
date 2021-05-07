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

    var all_models = [{"attributes": {"doc": null, "id": "1e09d7d2-34b1-4d6d-a062-c848469be8c6"}, "type": "CategoricalTickFormatter", "id": "1e09d7d2-34b1-4d6d-a062-c848469be8c6"}, {"attributes": {"doc": null, "id": "3ac7c6dd-d522-4cf7-89cf-9cff3f74e0d3", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "3ac7c6dd-d522-4cf7-89cf-9cff3f74e0d3"}, {"attributes": {"doc": null, "id": "27826997-ee1f-43e6-8ccb-e4068ea637f4", "factors": ["MD - Date.gov.md - Public Contracts"]}, "type": "FactorRange", "id": "27826997-ee1f-43e6-8ccb-e4068ea637f4"}, {"attributes": {"doc": null, "id": "2ddd18c3-9be5-4e6d-8c31-5cf201d0a29e"}, "type": "CategoricalTicker", "id": "2ddd18c3-9be5-4e6d-8c31-5cf201d0a29e"}, {"attributes": {"plot": {"type": "Plot", "id": "5cb089b9-ffee-4b88-8c87-5c065d7845c8"}, "doc": null, "bounds": "auto", "id": "6b4fa6fc-1027-4c73-8b7a-37ff61db2a44", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "1e09d7d2-34b1-4d6d-a062-c848469be8c6"}, "ticker": {"type": "CategoricalTicker", "id": "2ddd18c3-9be5-4e6d-8c31-5cf201d0a29e"}, "dimension": 0}, "type": "CategoricalAxis", "id": "6b4fa6fc-1027-4c73-8b7a-37ff61db2a44"}, {"attributes": {"plot": {"type": "Plot", "id": "5cb089b9-ffee-4b88-8c87-5c065d7845c8"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "6b12ccb3-c6d3-4321-ac79-89f4805c1809", "axis": {"type": "CategoricalAxis", "id": "6b4fa6fc-1027-4c73-8b7a-37ff61db2a44"}}, "type": "Grid", "id": "6b12ccb3-c6d3-4321-ac79-89f4805c1809"}, {"attributes": {"doc": null, "id": "a54de482-5855-4f00-b1f4-b6d76ea26b5b"}, "type": "CategoricalTickFormatter", "id": "a54de482-5855-4f00-b1f4-b6d76ea26b5b"}, {"attributes": {"doc": null, "id": "d0b7061b-415e-4931-a2c6-be75b4ee2b47"}, "type": "CategoricalTicker", "id": "d0b7061b-415e-4931-a2c6-be75b4ee2b47"}, {"attributes": {"plot": {"type": "Plot", "id": "5cb089b9-ffee-4b88-8c87-5c065d7845c8"}, "doc": null, "bounds": "auto", "id": "a47e1f79-8bcb-46fb-a5f8-b6d618cf6ee7", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "a54de482-5855-4f00-b1f4-b6d76ea26b5b"}, "ticker": {"type": "CategoricalTicker", "id": "d0b7061b-415e-4931-a2c6-be75b4ee2b47"}, "dimension": 1}, "type": "CategoricalAxis", "id": "a47e1f79-8bcb-46fb-a5f8-b6d618cf6ee7"}, {"attributes": {"plot": {"type": "Plot", "id": "5cb089b9-ffee-4b88-8c87-5c065d7845c8"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "300c1240-0035-4270-9e6d-106cf9e43d83", "axis": {"type": "CategoricalAxis", "id": "a47e1f79-8bcb-46fb-a5f8-b6d618cf6ee7"}}, "type": "Grid", "id": "300c1240-0035-4270-9e6d-106cf9e43d83"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [5, 5, 0, 0, 0, 0, 5, 0, 5, 0, 0, 5, 0, 5, 0], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["MD - Date.gov.md - Public Contracts", "MD - Date.gov.md - Public Contracts", "MD - Date.gov.md - Public Contracts", "MD - Date.gov.md - Public Contracts", "MD - Date.gov.md - Public Contracts", "MD - Date.gov.md - Public Contracts", "MD - Date.gov.md - Public Contracts", "MD - Date.gov.md - Public Contracts", "MD - Date.gov.md - Public Contracts", "MD - Date.gov.md - Public Contracts", "MD - Date.gov.md - Public Contracts", "MD - Date.gov.md - Public Contracts", "MD - Date.gov.md - Public Contracts", "MD - Date.gov.md - Public Contracts", "MD - Date.gov.md - Public Contracts"], "fields_in_concept": ["nr d/o", "Contract amount including VAT, lei", "", "", "", "", "Number and date of the procurement contract", "", "The object of purchase (name of goods / services)", "", "", "Name of company with whom the contract was concluded", "", "The procurement process", ""]}, "id": "35eb616b-3b7d-48b9-9502-f26615cf2d53"}, "type": "ColumnDataSource", "id": "35eb616b-3b7d-48b9-9502-f26615cf2d53"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "35eb616b-3b7d-48b9-9502-f26615cf2d53"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "02bb9371-d5e3-4714-96e6-62c36b69b297"}, "type": "Glyph", "id": "02bb9371-d5e3-4714-96e6-62c36b69b297"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "35eb616b-3b7d-48b9-9502-f26615cf2d53"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "9005182f-8df0-4fb9-85b8-7c94c2bbb533"}, "type": "Glyph", "id": "9005182f-8df0-4fb9-85b8-7c94c2bbb533"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "5cb089b9-ffee-4b88-8c87-5c065d7845c8"}, "doc": null, "renderers": [], "id": "f7654455-2158-4c20-8259-799b571d3b34"}, "type": "HoverTool", "id": "f7654455-2158-4c20-8259-799b571d3b34"}, {"attributes": {"plot": {"type": "Plot", "id": "5cb089b9-ffee-4b88-8c87-5c065d7845c8"}, "id": "5ea01867-49d1-4666-acea-3512b2cabc3d", "doc": null}, "type": "ResizeTool", "id": "5ea01867-49d1-4666-acea-3512b2cabc3d"}, {"attributes": {"plot": {"type": "Plot", "id": "5cb089b9-ffee-4b88-8c87-5c065d7845c8"}, "id": "97d1de68-c729-4a31-9025-476765f05ba0", "doc": null}, "type": "PreviewSaveTool", "id": "97d1de68-c729-4a31-9025-476765f05ba0"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "3ac7c6dd-d522-4cf7-89cf-9cff3f74e0d3"}, "y_range": {"type": "FactorRange", "id": "27826997-ee1f-43e6-8ccb-e4068ea637f4"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "6b4fa6fc-1027-4c73-8b7a-37ff61db2a44"}, {"type": "Grid", "id": "6b12ccb3-c6d3-4321-ac79-89f4805c1809"}, {"type": "CategoricalAxis", "id": "a47e1f79-8bcb-46fb-a5f8-b6d618cf6ee7"}, {"type": "Grid", "id": "300c1240-0035-4270-9e6d-106cf9e43d83"}, {"type": "Glyph", "id": "02bb9371-d5e3-4714-96e6-62c36b69b297"}, {"type": "Glyph", "id": "9005182f-8df0-4fb9-85b8-7c94c2bbb533"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "5cb089b9-ffee-4b88-8c87-5c065d7845c8", "title": null, "tools": [{"type": "HoverTool", "id": "f7654455-2158-4c20-8259-799b571d3b34"}, {"type": "ResizeTool", "id": "5ea01867-49d1-4666-acea-3512b2cabc3d"}, {"type": "PreviewSaveTool", "id": "97d1de68-c729-4a31-9025-476765f05ba0"}], "canvas_width": 1200}, "type": "Plot", "id": "5cb089b9-ffee-4b88-8c87-5c065d7845c8"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "5cb089b9-ffee-4b88-8c87-5c065d7845c8"}], "id": "27e3e0dd-d778-447a-a95f-00ff2ce1c69b"}, "type": "PlotContext", "id": "27e3e0dd-d778-447a-a95f-00ff2ce1c69b"}];
    var modeltype = "PlotContext";
    var elementid = "16d7a890-9428-4312-8200-e250a2fcd978";
    var plotID = "5cb089b9-ffee-4b88-8c87-5c065d7845c8";
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
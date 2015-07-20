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

    var all_models = [{"attributes": {"doc": null, "id": "5e11a95f-77d7-44c9-a475-6732568e32fe", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "5e11a95f-77d7-44c9-a475-6732568e32fe"}, {"attributes": {"doc": null, "id": "73e58fa2-19a2-447d-b076-e63e28198b43", "factors": ["CA - Data.gc.ca - ACOA Disclosure of Contracts"]}, "type": "FactorRange", "id": "73e58fa2-19a2-447d-b076-e63e28198b43"}, {"attributes": {"doc": null, "id": "3f6cc149-358a-4ecf-82ba-178ade3571d4"}, "type": "CategoricalTickFormatter", "id": "3f6cc149-358a-4ecf-82ba-178ade3571d4"}, {"attributes": {"doc": null, "id": "59ade5ad-5b4c-474e-a92e-0ec23710cbc3"}, "type": "CategoricalTicker", "id": "59ade5ad-5b4c-474e-a92e-0ec23710cbc3"}, {"attributes": {"plot": {"type": "Plot", "id": "862e384d-f9b0-4606-a8d3-965b3e016960"}, "doc": null, "bounds": "auto", "id": "965a6afc-6132-45d0-ac53-6e1c60cd11b0", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "3f6cc149-358a-4ecf-82ba-178ade3571d4"}, "ticker": {"type": "CategoricalTicker", "id": "59ade5ad-5b4c-474e-a92e-0ec23710cbc3"}, "dimension": 0}, "type": "CategoricalAxis", "id": "965a6afc-6132-45d0-ac53-6e1c60cd11b0"}, {"attributes": {"plot": {"type": "Plot", "id": "862e384d-f9b0-4606-a8d3-965b3e016960"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "e3754836-4995-45e0-91ee-8c8bbf978c8f", "axis": {"type": "CategoricalAxis", "id": "965a6afc-6132-45d0-ac53-6e1c60cd11b0"}}, "type": "Grid", "id": "e3754836-4995-45e0-91ee-8c8bbf978c8f"}, {"attributes": {"doc": null, "id": "c2e156a8-152d-478f-9b3e-2d5987c5e064"}, "type": "CategoricalTickFormatter", "id": "c2e156a8-152d-478f-9b3e-2d5987c5e064"}, {"attributes": {"doc": null, "id": "722833a1-11b1-4caa-9ba0-7917a45a3e35"}, "type": "CategoricalTicker", "id": "722833a1-11b1-4caa-9ba0-7917a45a3e35"}, {"attributes": {"plot": {"type": "Plot", "id": "862e384d-f9b0-4606-a8d3-965b3e016960"}, "doc": null, "bounds": "auto", "id": "5d2790aa-c886-43fa-a218-a31f4461df72", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "c2e156a8-152d-478f-9b3e-2d5987c5e064"}, "ticker": {"type": "CategoricalTicker", "id": "722833a1-11b1-4caa-9ba0-7917a45a3e35"}, "dimension": 1}, "type": "CategoricalAxis", "id": "5d2790aa-c886-43fa-a218-a31f4461df72"}, {"attributes": {"plot": {"type": "Plot", "id": "862e384d-f9b0-4606-a8d3-965b3e016960"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "bb8d3d09-e54a-44b6-bd83-53ffb72c8477", "axis": {"type": "CategoricalAxis", "id": "5d2790aa-c886-43fa-a218-a31f4461df72"}}, "type": "Grid", "id": "bb8d3d09-e54a-44b6-bd83-53ffb72c8477"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [0, 5, 5, 0, 0, 25, 5, 0, 5, 0, 0, 5, 5, 0, 0], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["CA - Data.gc.ca - ACOA Disclosure of Contracts", "CA - Data.gc.ca - ACOA Disclosure of Contracts", "CA - Data.gc.ca - ACOA Disclosure of Contracts", "CA - Data.gc.ca - ACOA Disclosure of Contracts", "CA - Data.gc.ca - ACOA Disclosure of Contracts", "CA - Data.gc.ca - ACOA Disclosure of Contracts", "CA - Data.gc.ca - ACOA Disclosure of Contracts", "CA - Data.gc.ca - ACOA Disclosure of Contracts", "CA - Data.gc.ca - ACOA Disclosure of Contracts", "CA - Data.gc.ca - ACOA Disclosure of Contracts", "CA - Data.gc.ca - ACOA Disclosure of Contracts", "CA - Data.gc.ca - ACOA Disclosure of Contracts", "CA - Data.gc.ca - ACOA Disclosure of Contracts", "CA - Data.gc.ca - ACOA Disclosure of Contracts", "CA - Data.gc.ca - ACOA Disclosure of Contracts"], "fields_in_concept": ["", "Contract Value", "Contract Date", "", "", "Delivery Date, End Date, Fiscal Year, Quarter, Start Date", "Reference Number", "", "Description of Work", "", "", "Vendor Name", "Comments", "", ""]}, "id": "725f6868-ea2d-4e39-beab-bc0d4036b705"}, "type": "ColumnDataSource", "id": "725f6868-ea2d-4e39-beab-bc0d4036b705"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "725f6868-ea2d-4e39-beab-bc0d4036b705"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "651bf4ee-92ec-468a-84b0-5175cdf53eaf"}, "type": "Glyph", "id": "651bf4ee-92ec-468a-84b0-5175cdf53eaf"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "725f6868-ea2d-4e39-beab-bc0d4036b705"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "f05c0e43-1764-42b6-88bf-4f27cf4b2f05"}, "type": "Glyph", "id": "f05c0e43-1764-42b6-88bf-4f27cf4b2f05"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "862e384d-f9b0-4606-a8d3-965b3e016960"}, "doc": null, "renderers": [], "id": "f6e2277a-b967-46bd-8106-fa42c7b9514c"}, "type": "HoverTool", "id": "f6e2277a-b967-46bd-8106-fa42c7b9514c"}, {"attributes": {"plot": {"type": "Plot", "id": "862e384d-f9b0-4606-a8d3-965b3e016960"}, "id": "7f89d3f0-2f1d-437e-8c35-8d96a7097ddf", "doc": null}, "type": "ResizeTool", "id": "7f89d3f0-2f1d-437e-8c35-8d96a7097ddf"}, {"attributes": {"plot": {"type": "Plot", "id": "862e384d-f9b0-4606-a8d3-965b3e016960"}, "id": "f9d38cf0-6285-4f87-9501-19813a0384a3", "doc": null}, "type": "PreviewSaveTool", "id": "f9d38cf0-6285-4f87-9501-19813a0384a3"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "5e11a95f-77d7-44c9-a475-6732568e32fe"}, "y_range": {"type": "FactorRange", "id": "73e58fa2-19a2-447d-b076-e63e28198b43"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "965a6afc-6132-45d0-ac53-6e1c60cd11b0"}, {"type": "Grid", "id": "e3754836-4995-45e0-91ee-8c8bbf978c8f"}, {"type": "CategoricalAxis", "id": "5d2790aa-c886-43fa-a218-a31f4461df72"}, {"type": "Grid", "id": "bb8d3d09-e54a-44b6-bd83-53ffb72c8477"}, {"type": "Glyph", "id": "651bf4ee-92ec-468a-84b0-5175cdf53eaf"}, {"type": "Glyph", "id": "f05c0e43-1764-42b6-88bf-4f27cf4b2f05"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "862e384d-f9b0-4606-a8d3-965b3e016960", "title": null, "tools": [{"type": "HoverTool", "id": "f6e2277a-b967-46bd-8106-fa42c7b9514c"}, {"type": "ResizeTool", "id": "7f89d3f0-2f1d-437e-8c35-8d96a7097ddf"}, {"type": "PreviewSaveTool", "id": "f9d38cf0-6285-4f87-9501-19813a0384a3"}], "canvas_width": 1200}, "type": "Plot", "id": "862e384d-f9b0-4606-a8d3-965b3e016960"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "862e384d-f9b0-4606-a8d3-965b3e016960"}], "id": "7592845b-3d9c-4335-8bdc-d5cf3e768c75"}, "type": "PlotContext", "id": "7592845b-3d9c-4335-8bdc-d5cf3e768c75"}];
    var modeltype = "PlotContext";
    var elementid = "1d95f162-f601-4f5a-9fa0-e6f60efa2c2e";
    var plotID = "862e384d-f9b0-4606-a8d3-965b3e016960";
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
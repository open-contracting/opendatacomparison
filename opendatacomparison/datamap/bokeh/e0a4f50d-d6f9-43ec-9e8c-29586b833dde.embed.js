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

    var all_models = [{"attributes": {"doc": null, "id": "60c3aa4c-20c5-4b74-a6b4-c695a58cab11", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "60c3aa4c-20c5-4b74-a6b4-c695a58cab11"}, {"attributes": {"doc": null, "id": "2d820615-b527-4a58-86e3-e7fd342e79c8", "factors": ["UY - ACCE - Awards "]}, "type": "FactorRange", "id": "2d820615-b527-4a58-86e3-e7fd342e79c8"}, {"attributes": {"doc": null, "id": "648ef1d0-53af-4958-b98a-5aa93fa106d2"}, "type": "CategoricalTickFormatter", "id": "648ef1d0-53af-4958-b98a-5aa93fa106d2"}, {"attributes": {"doc": null, "id": "215a7f14-83cb-4aa1-a56f-0efc517ea221"}, "type": "CategoricalTicker", "id": "215a7f14-83cb-4aa1-a56f-0efc517ea221"}, {"attributes": {"plot": {"type": "Plot", "id": "e0a4f50d-d6f9-43ec-9e8c-29586b833dde"}, "doc": null, "bounds": "auto", "id": "75784354-cdbc-4da5-9cd1-e10217dee428", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "648ef1d0-53af-4958-b98a-5aa93fa106d2"}, "ticker": {"type": "CategoricalTicker", "id": "215a7f14-83cb-4aa1-a56f-0efc517ea221"}, "dimension": 0}, "type": "CategoricalAxis", "id": "75784354-cdbc-4da5-9cd1-e10217dee428"}, {"attributes": {"plot": {"type": "Plot", "id": "e0a4f50d-d6f9-43ec-9e8c-29586b833dde"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "00f92ea7-1d41-4c57-93db-122e483bd8c6", "axis": {"type": "CategoricalAxis", "id": "75784354-cdbc-4da5-9cd1-e10217dee428"}}, "type": "Grid", "id": "00f92ea7-1d41-4c57-93db-122e483bd8c6"}, {"attributes": {"doc": null, "id": "d7f185bf-a920-4995-ad2d-711a2b069c55"}, "type": "CategoricalTickFormatter", "id": "d7f185bf-a920-4995-ad2d-711a2b069c55"}, {"attributes": {"doc": null, "id": "14cbef23-451e-45b0-8bb6-a0c2a9c3d9e5"}, "type": "CategoricalTicker", "id": "14cbef23-451e-45b0-8bb6-a0c2a9c3d9e5"}, {"attributes": {"plot": {"type": "Plot", "id": "e0a4f50d-d6f9-43ec-9e8c-29586b833dde"}, "doc": null, "bounds": "auto", "id": "f8c41b4b-fe65-42d3-ae57-53f913f9ff4a", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "d7f185bf-a920-4995-ad2d-711a2b069c55"}, "ticker": {"type": "CategoricalTicker", "id": "14cbef23-451e-45b0-8bb6-a0c2a9c3d9e5"}, "dimension": 1}, "type": "CategoricalAxis", "id": "f8c41b4b-fe65-42d3-ae57-53f913f9ff4a"}, {"attributes": {"plot": {"type": "Plot", "id": "e0a4f50d-d6f9-43ec-9e8c-29586b833dde"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "b9bc9565-55a6-45e1-919f-9d313fff6225", "axis": {"type": "CategoricalAxis", "id": "f8c41b4b-fe65-42d3-ae57-53f913f9ff4a"}}, "type": "Grid", "id": "b9bc9565-55a6-45e1-919f-9d313fff6225"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [5, 5, 10, 15, 5, 0, 0, 10, 5, 0, 0, 0, 5, 5, 5], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["UY - ACCE - Awards ", "UY - ACCE - Awards ", "UY - ACCE - Awards ", "UY - ACCE - Awards ", "UY - ACCE - Awards ", "UY - ACCE - Awards ", "UY - ACCE - Awards ", "UY - ACCE - Awards ", "UY - ACCE - Awards ", "UY - ACCE - Awards ", "UY - ACCE - Awards ", "UY - ACCE - Awards ", "UY - ACCE - Awards ", "UY - ACCE - Awards ", "UY - ACCE - Awards "], "fields_in_concept": ["Revolving Funds", "Total Amount of Purchase", "Clarifications, Date of award", "Number, request, Resolution number", "Agency", "", "", "Attachment, Reiteration Spending", "Subject Recruitment", "", "", "", "Date of publication", "Type / Subtype", "State of the process"]}, "id": "6c9a1420-7e0e-49b2-af4b-c1bed213cc8e"}, "type": "ColumnDataSource", "id": "6c9a1420-7e0e-49b2-af4b-c1bed213cc8e"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "6c9a1420-7e0e-49b2-af4b-c1bed213cc8e"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "61ab0681-53c5-4f36-84d3-9d9be1091881"}, "type": "Glyph", "id": "61ab0681-53c5-4f36-84d3-9d9be1091881"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "6c9a1420-7e0e-49b2-af4b-c1bed213cc8e"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "7a913e7b-2bb1-4d31-89d6-bc135a4863e3"}, "type": "Glyph", "id": "7a913e7b-2bb1-4d31-89d6-bc135a4863e3"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "e0a4f50d-d6f9-43ec-9e8c-29586b833dde"}, "doc": null, "renderers": [], "id": "141de121-2505-4b6e-b91e-91fc2352f430"}, "type": "HoverTool", "id": "141de121-2505-4b6e-b91e-91fc2352f430"}, {"attributes": {"plot": {"type": "Plot", "id": "e0a4f50d-d6f9-43ec-9e8c-29586b833dde"}, "id": "0e3ba015-56cc-4660-9e5e-b8a6162338cd", "doc": null}, "type": "PreviewSaveTool", "id": "0e3ba015-56cc-4660-9e5e-b8a6162338cd"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "60c3aa4c-20c5-4b74-a6b4-c695a58cab11"}, "y_range": {"type": "FactorRange", "id": "2d820615-b527-4a58-86e3-e7fd342e79c8"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "75784354-cdbc-4da5-9cd1-e10217dee428"}, {"type": "Grid", "id": "00f92ea7-1d41-4c57-93db-122e483bd8c6"}, {"type": "CategoricalAxis", "id": "f8c41b4b-fe65-42d3-ae57-53f913f9ff4a"}, {"type": "Grid", "id": "b9bc9565-55a6-45e1-919f-9d313fff6225"}, {"type": "Glyph", "id": "61ab0681-53c5-4f36-84d3-9d9be1091881"}, {"type": "Glyph", "id": "7a913e7b-2bb1-4d31-89d6-bc135a4863e3"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "e0a4f50d-d6f9-43ec-9e8c-29586b833dde", "title": null, "tools": [{"type": "HoverTool", "id": "141de121-2505-4b6e-b91e-91fc2352f430"}, {"type": "ResizeTool", "id": "f987cbed-711e-4288-8895-3d71975df8c5"}, {"type": "PreviewSaveTool", "id": "0e3ba015-56cc-4660-9e5e-b8a6162338cd"}], "canvas_width": 1200}, "type": "Plot", "id": "e0a4f50d-d6f9-43ec-9e8c-29586b833dde"}, {"attributes": {"plot": {"type": "Plot", "id": "e0a4f50d-d6f9-43ec-9e8c-29586b833dde"}, "id": "f987cbed-711e-4288-8895-3d71975df8c5", "doc": null}, "type": "ResizeTool", "id": "f987cbed-711e-4288-8895-3d71975df8c5"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "e0a4f50d-d6f9-43ec-9e8c-29586b833dde"}], "id": "38ed3cda-587a-4bb3-839d-787c3fa32c89"}, "type": "PlotContext", "id": "38ed3cda-587a-4bb3-839d-787c3fa32c89"}];
    var modeltype = "PlotContext";
    var elementid = "16eadbe2-03e0-4de7-842f-8d7ff9d96758";
    var plotID = "e0a4f50d-d6f9-43ec-9e8c-29586b833dde";
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
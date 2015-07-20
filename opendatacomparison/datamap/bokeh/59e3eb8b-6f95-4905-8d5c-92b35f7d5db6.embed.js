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

    var all_models = [{"attributes": {"doc": null, "id": "2b9daa2c-5f11-470c-a7da-ccfa97b6b771", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "2b9daa2c-5f11-470c-a7da-ccfa97b6b771"}, {"attributes": {"doc": null, "id": "016f2cd4-557d-4494-b954-95fdbeddc260", "factors": ["US - Checkbook - Contracts "]}, "type": "FactorRange", "id": "016f2cd4-557d-4494-b954-95fdbeddc260"}, {"attributes": {"doc": null, "id": "86e99699-1c7a-4a0f-8a8e-0936bc4c1aa8"}, "type": "CategoricalTickFormatter", "id": "86e99699-1c7a-4a0f-8a8e-0936bc4c1aa8"}, {"attributes": {"doc": null, "id": "0c631596-12b0-45e1-a0b1-d517049c55be"}, "type": "CategoricalTicker", "id": "0c631596-12b0-45e1-a0b1-d517049c55be"}, {"attributes": {"plot": {"type": "Plot", "id": "59e3eb8b-6f95-4905-8d5c-92b35f7d5db6"}, "doc": null, "bounds": "auto", "id": "7fdbc261-9edf-48cb-b0c5-804ee2975ac8", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "86e99699-1c7a-4a0f-8a8e-0936bc4c1aa8"}, "ticker": {"type": "CategoricalTicker", "id": "0c631596-12b0-45e1-a0b1-d517049c55be"}, "dimension": 0}, "type": "CategoricalAxis", "id": "7fdbc261-9edf-48cb-b0c5-804ee2975ac8"}, {"attributes": {"doc": null, "id": "960cdd4d-f97d-403d-97fd-2d0e160606a6"}, "type": "CategoricalTickFormatter", "id": "960cdd4d-f97d-403d-97fd-2d0e160606a6"}, {"attributes": {"doc": null, "id": "4930a526-4be5-4f8b-a2cc-ade61ddfd29b"}, "type": "CategoricalTicker", "id": "4930a526-4be5-4f8b-a2cc-ade61ddfd29b"}, {"attributes": {"plot": {"type": "Plot", "id": "59e3eb8b-6f95-4905-8d5c-92b35f7d5db6"}, "doc": null, "bounds": "auto", "id": "aed01161-b169-4621-9789-aeeddc6bbb5f", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "960cdd4d-f97d-403d-97fd-2d0e160606a6"}, "ticker": {"type": "CategoricalTicker", "id": "4930a526-4be5-4f8b-a2cc-ade61ddfd29b"}, "dimension": 1}, "type": "CategoricalAxis", "id": "aed01161-b169-4621-9789-aeeddc6bbb5f"}, {"attributes": {"plot": {"type": "Plot", "id": "59e3eb8b-6f95-4905-8d5c-92b35f7d5db6"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "b68e6c36-840c-47b1-9a12-a071d0dc8fcd", "axis": {"type": "CategoricalAxis", "id": "aed01161-b169-4621-9789-aeeddc6bbb5f"}}, "type": "Grid", "id": "b68e6c36-840c-47b1-9a12-a071d0dc8fcd"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [5, 15, 0, 0, 5, 10, 15, 5, 20, 0, 0, 5, 0, 10, 10], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["US - Checkbook - Contracts ", "US - Checkbook - Contracts ", "US - Checkbook - Contracts ", "US - Checkbook - Contracts ", "US - Checkbook - Contracts ", "US - Checkbook - Contracts ", "US - Checkbook - Contracts ", "US - Checkbook - Contracts ", "US - Checkbook - Contracts ", "US - Checkbook - Contracts ", "US - Checkbook - Contracts ", "US - Checkbook - Contracts ", "US - Checkbook - Contracts ", "US - Checkbook - Contracts ", "US - Checkbook - Contracts "], "fields_in_concept": ["Version", "Current Amount, Original Amount, Spent to date", "", "", "Agency", "End Date, Start Date", "Contract ID, Parent Contract ID, Registration Date", "Document Code", "Contract Industry, Contract Type, Expense Category, Purpose", "", "", "Vendor", "", "Award Method, Year", "APT PIN, PIN"]}, "id": "28310b15-e039-43e0-a478-ebab3d3dbb0f"}, "type": "ColumnDataSource", "id": "28310b15-e039-43e0-a478-ebab3d3dbb0f"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "28310b15-e039-43e0-a478-ebab3d3dbb0f"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "0bf3846e-3e7e-4a69-8f41-6e65d5be4090"}, "type": "Glyph", "id": "0bf3846e-3e7e-4a69-8f41-6e65d5be4090"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "28310b15-e039-43e0-a478-ebab3d3dbb0f"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "df77ba04-2ec9-4845-b0ce-f7cd7c367237"}, "type": "Glyph", "id": "df77ba04-2ec9-4845-b0ce-f7cd7c367237"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "59e3eb8b-6f95-4905-8d5c-92b35f7d5db6"}, "doc": null, "renderers": [], "id": "35e033fa-f0e0-4343-baff-f9c2e0f686f6"}, "type": "HoverTool", "id": "35e033fa-f0e0-4343-baff-f9c2e0f686f6"}, {"attributes": {"plot": {"type": "Plot", "id": "59e3eb8b-6f95-4905-8d5c-92b35f7d5db6"}, "id": "d5016973-4579-4b39-a580-33a2573c6672", "doc": null}, "type": "ResizeTool", "id": "d5016973-4579-4b39-a580-33a2573c6672"}, {"attributes": {"plot": {"type": "Plot", "id": "59e3eb8b-6f95-4905-8d5c-92b35f7d5db6"}, "id": "65d9addb-fc1e-4f23-949e-70da8c258055", "doc": null}, "type": "PreviewSaveTool", "id": "65d9addb-fc1e-4f23-949e-70da8c258055"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "2b9daa2c-5f11-470c-a7da-ccfa97b6b771"}, "y_range": {"type": "FactorRange", "id": "016f2cd4-557d-4494-b954-95fdbeddc260"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "7fdbc261-9edf-48cb-b0c5-804ee2975ac8"}, {"type": "Grid", "id": "131457b6-e626-430f-8d4e-56d26397f26e"}, {"type": "CategoricalAxis", "id": "aed01161-b169-4621-9789-aeeddc6bbb5f"}, {"type": "Grid", "id": "b68e6c36-840c-47b1-9a12-a071d0dc8fcd"}, {"type": "Glyph", "id": "0bf3846e-3e7e-4a69-8f41-6e65d5be4090"}, {"type": "Glyph", "id": "df77ba04-2ec9-4845-b0ce-f7cd7c367237"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "59e3eb8b-6f95-4905-8d5c-92b35f7d5db6", "title": null, "tools": [{"type": "HoverTool", "id": "35e033fa-f0e0-4343-baff-f9c2e0f686f6"}, {"type": "ResizeTool", "id": "d5016973-4579-4b39-a580-33a2573c6672"}, {"type": "PreviewSaveTool", "id": "65d9addb-fc1e-4f23-949e-70da8c258055"}], "canvas_width": 1200}, "type": "Plot", "id": "59e3eb8b-6f95-4905-8d5c-92b35f7d5db6"}, {"attributes": {"plot": {"type": "Plot", "id": "59e3eb8b-6f95-4905-8d5c-92b35f7d5db6"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "131457b6-e626-430f-8d4e-56d26397f26e", "axis": {"type": "CategoricalAxis", "id": "7fdbc261-9edf-48cb-b0c5-804ee2975ac8"}}, "type": "Grid", "id": "131457b6-e626-430f-8d4e-56d26397f26e"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "59e3eb8b-6f95-4905-8d5c-92b35f7d5db6"}], "id": "752a9ea9-8ba5-41f1-a6f9-45ecfe2ca456"}, "type": "PlotContext", "id": "752a9ea9-8ba5-41f1-a6f9-45ecfe2ca456"}];
    var modeltype = "PlotContext";
    var elementid = "ffbd4fb1-fcd2-48ee-94b8-41af7e50669b";
    var plotID = "59e3eb8b-6f95-4905-8d5c-92b35f7d5db6";
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
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

    var all_models = [{"attributes": {"doc": null, "id": "436b1ed5-876a-43eb-be2c-cc42aa8660df", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "436b1ed5-876a-43eb-be2c-cc42aa8660df"}, {"attributes": {"doc": null, "id": "0a47e95c-fb64-4bed-b5f9-cb0f26899d0e", "factors": ["MD - Date.gov.md - Public Procurement"]}, "type": "FactorRange", "id": "0a47e95c-fb64-4bed-b5f9-cb0f26899d0e"}, {"attributes": {"doc": null, "id": "332e9d74-148b-41f5-8e8c-d3325799ab36"}, "type": "CategoricalTickFormatter", "id": "332e9d74-148b-41f5-8e8c-d3325799ab36"}, {"attributes": {"doc": null, "id": "b5e068c9-a62c-4ede-917b-0d1124b780d6"}, "type": "CategoricalTicker", "id": "b5e068c9-a62c-4ede-917b-0d1124b780d6"}, {"attributes": {"plot": {"type": "Plot", "id": "d41af176-655c-4793-9f63-292f0913a880"}, "doc": null, "bounds": "auto", "id": "958e4bc6-2e14-4ab6-8022-d16059943799", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "332e9d74-148b-41f5-8e8c-d3325799ab36"}, "ticker": {"type": "CategoricalTicker", "id": "b5e068c9-a62c-4ede-917b-0d1124b780d6"}, "dimension": 0}, "type": "CategoricalAxis", "id": "958e4bc6-2e14-4ab6-8022-d16059943799"}, {"attributes": {"plot": {"type": "Plot", "id": "d41af176-655c-4793-9f63-292f0913a880"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "9feee189-37d2-4b17-b9d6-7a32aa41a33e", "axis": {"type": "CategoricalAxis", "id": "958e4bc6-2e14-4ab6-8022-d16059943799"}}, "type": "Grid", "id": "9feee189-37d2-4b17-b9d6-7a32aa41a33e"}, {"attributes": {"doc": null, "id": "9dae2501-3c2e-48b4-89d3-bd6318282655"}, "type": "CategoricalTickFormatter", "id": "9dae2501-3c2e-48b4-89d3-bd6318282655"}, {"attributes": {"doc": null, "id": "a4c904fd-a6dd-4962-ad1a-824d35e97b9e"}, "type": "CategoricalTicker", "id": "a4c904fd-a6dd-4962-ad1a-824d35e97b9e"}, {"attributes": {"plot": {"type": "Plot", "id": "d41af176-655c-4793-9f63-292f0913a880"}, "doc": null, "bounds": "auto", "id": "06397246-b3dd-4ab3-8ab5-1659544eaee5", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "9dae2501-3c2e-48b4-89d3-bd6318282655"}, "ticker": {"type": "CategoricalTicker", "id": "a4c904fd-a6dd-4962-ad1a-824d35e97b9e"}, "dimension": 1}, "type": "CategoricalAxis", "id": "06397246-b3dd-4ab3-8ab5-1659544eaee5"}, {"attributes": {"plot": {"type": "Plot", "id": "d41af176-655c-4793-9f63-292f0913a880"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "73fb711e-f67b-4fd2-8196-89a6110f2fd3", "axis": {"type": "CategoricalAxis", "id": "06397246-b3dd-4ab3-8ab5-1659544eaee5"}}, "type": "Grid", "id": "73fb711e-f67b-4fd2-8196-89a6110f2fd3"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [5, 20, 0, 0, 5, 5, 10, 0, 5, 0, 0, 5, 5, 0, 5], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["MD - Date.gov.md - Public Procurement", "MD - Date.gov.md - Public Procurement", "MD - Date.gov.md - Public Procurement", "MD - Date.gov.md - Public Procurement", "MD - Date.gov.md - Public Procurement", "MD - Date.gov.md - Public Procurement", "MD - Date.gov.md - Public Procurement", "MD - Date.gov.md - Public Procurement", "MD - Date.gov.md - Public Procurement", "MD - Date.gov.md - Public Procurement", "MD - Date.gov.md - Public Procurement", "MD - Date.gov.md - Public Procurement", "MD - Date.gov.md - Public Procurement", "MD - Date.gov.md - Public Procurement", "MD - Date.gov.md - Public Procurement"], "fields_in_concept": ["other mentions ", "contract amount, maximum amount, minimum amount , termination amount", "", "", "contracting authority ", "contract extension ", "initial contract registration number, Legal Document Number", "", "procured object", "", "", "economic operator ", "Legal Name", "", "auction number"]}, "id": "4fa824b0-9934-4cab-b84b-83827108caf3"}, "type": "ColumnDataSource", "id": "4fa824b0-9934-4cab-b84b-83827108caf3"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "4fa824b0-9934-4cab-b84b-83827108caf3"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "dfc7b59e-30e2-4b48-9fdf-a50444e4b734"}, "type": "Glyph", "id": "dfc7b59e-30e2-4b48-9fdf-a50444e4b734"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "4fa824b0-9934-4cab-b84b-83827108caf3"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "0d9e3e47-2ad8-437c-af87-9b3b2638ef73"}, "type": "Glyph", "id": "0d9e3e47-2ad8-437c-af87-9b3b2638ef73"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "d41af176-655c-4793-9f63-292f0913a880"}, "doc": null, "renderers": [], "id": "c0f1ea0c-3133-462e-a0b8-e3ce7c4592b0"}, "type": "HoverTool", "id": "c0f1ea0c-3133-462e-a0b8-e3ce7c4592b0"}, {"attributes": {"plot": {"type": "Plot", "id": "d41af176-655c-4793-9f63-292f0913a880"}, "id": "bc31744f-6fd5-497b-b542-b958143d4e88", "doc": null}, "type": "PreviewSaveTool", "id": "bc31744f-6fd5-497b-b542-b958143d4e88"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "436b1ed5-876a-43eb-be2c-cc42aa8660df"}, "y_range": {"type": "FactorRange", "id": "0a47e95c-fb64-4bed-b5f9-cb0f26899d0e"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "958e4bc6-2e14-4ab6-8022-d16059943799"}, {"type": "Grid", "id": "9feee189-37d2-4b17-b9d6-7a32aa41a33e"}, {"type": "CategoricalAxis", "id": "06397246-b3dd-4ab3-8ab5-1659544eaee5"}, {"type": "Grid", "id": "73fb711e-f67b-4fd2-8196-89a6110f2fd3"}, {"type": "Glyph", "id": "dfc7b59e-30e2-4b48-9fdf-a50444e4b734"}, {"type": "Glyph", "id": "0d9e3e47-2ad8-437c-af87-9b3b2638ef73"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "d41af176-655c-4793-9f63-292f0913a880", "title": null, "tools": [{"type": "HoverTool", "id": "c0f1ea0c-3133-462e-a0b8-e3ce7c4592b0"}, {"type": "ResizeTool", "id": "d58a7223-dc8d-410c-9aa1-3aab92543105"}, {"type": "PreviewSaveTool", "id": "bc31744f-6fd5-497b-b542-b958143d4e88"}], "canvas_width": 1200}, "type": "Plot", "id": "d41af176-655c-4793-9f63-292f0913a880"}, {"attributes": {"plot": {"type": "Plot", "id": "d41af176-655c-4793-9f63-292f0913a880"}, "id": "d58a7223-dc8d-410c-9aa1-3aab92543105", "doc": null}, "type": "ResizeTool", "id": "d58a7223-dc8d-410c-9aa1-3aab92543105"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "d41af176-655c-4793-9f63-292f0913a880"}], "id": "e46a80e9-c4b2-4c0f-8c82-e56985e8fa77"}, "type": "PlotContext", "id": "e46a80e9-c4b2-4c0f-8c82-e56985e8fa77"}];
    var modeltype = "PlotContext";
    var elementid = "2b1e198a-da08-49ae-98d0-d11b670e5ee5";
    var plotID = "d41af176-655c-4793-9f63-292f0913a880";
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
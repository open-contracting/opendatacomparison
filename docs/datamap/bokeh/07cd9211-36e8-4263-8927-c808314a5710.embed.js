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

    var all_models = [{"attributes": {"doc": null, "id": "0b643176-9dc0-49a7-8eb5-b067fa5f51c0", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "0b643176-9dc0-49a7-8eb5-b067fa5f51c0"}, {"attributes": {"doc": null, "id": "c602c4fa-e18b-410c-9ed5-8a469484d2cb", "factors": ["GB - Contracts Finder - All Notices"]}, "type": "FactorRange", "id": "c602c4fa-e18b-410c-9ed5-8a469484d2cb"}, {"attributes": {"doc": null, "id": "f7d4b39d-9ecd-4fa3-b960-0337841fde18"}, "type": "CategoricalTickFormatter", "id": "f7d4b39d-9ecd-4fa3-b960-0337841fde18"}, {"attributes": {"doc": null, "id": "4d366485-dcbb-483c-83cd-38ab4782473a"}, "type": "CategoricalTicker", "id": "4d366485-dcbb-483c-83cd-38ab4782473a"}, {"attributes": {"plot": {"type": "Plot", "id": "07cd9211-36e8-4263-8927-c808314a5710"}, "doc": null, "bounds": "auto", "id": "30019f4e-fdd5-45da-a515-ee5e45d48af6", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "f7d4b39d-9ecd-4fa3-b960-0337841fde18"}, "ticker": {"type": "CategoricalTicker", "id": "4d366485-dcbb-483c-83cd-38ab4782473a"}, "dimension": 0}, "type": "CategoricalAxis", "id": "30019f4e-fdd5-45da-a515-ee5e45d48af6"}, {"attributes": {"plot": {"type": "Plot", "id": "07cd9211-36e8-4263-8927-c808314a5710"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "68799592-7940-44ba-957a-5d56d7670d54", "axis": {"type": "CategoricalAxis", "id": "30019f4e-fdd5-45da-a515-ee5e45d48af6"}}, "type": "Grid", "id": "68799592-7940-44ba-957a-5d56d7670d54"}, {"attributes": {"plot": {"type": "Plot", "id": "07cd9211-36e8-4263-8927-c808314a5710"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "08f39177-d6a2-4c31-a158-3f31084f3f8b", "axis": {"type": "CategoricalAxis", "id": "35b2c18f-ccf5-4a54-a2da-101c445038f0"}}, "type": "Grid", "id": "08f39177-d6a2-4c31-a158-3f31084f3f8b"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [5, 10, 0, 0, 10, 0, 0, 5, 15, 0, 0, 0, 35, 0, 5], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["GB - Contracts Finder - All Notices", "GB - Contracts Finder - All Notices", "GB - Contracts Finder - All Notices", "GB - Contracts Finder - All Notices", "GB - Contracts Finder - All Notices", "GB - Contracts Finder - All Notices", "GB - Contracts Finder - All Notices", "GB - Contracts Finder - All Notices", "GB - Contracts Finder - All Notices", "GB - Contracts Finder - All Notices", "GB - Contracts Finder - All Notices", "GB - Contracts Finder - All Notices", "GB - Contracts Finder - All Notices", "GB - Contracts Finder - All Notices", "GB - Contracts Finder - All Notices"], "fields_in_concept": ["REGION", "VALUEMAX, VALUEMIN", "", "", "ORG_CONTACTEMAIL, ORG_NAME", "", "", "NUM_DOCS", "CLASSIFICATION, DESCRIPTION, TITLE", "", "", "", "DATEPUBLISHED, NOTICEID, NOTICETYPE, NOTICE_STATE, NOTICE_STATE_CHANGE_DATE, STATUS, Url", "", "REFERENCENUMBER"]}, "id": "9a731260-c2e9-4135-9016-7a47f2f2f124"}, "type": "ColumnDataSource", "id": "9a731260-c2e9-4135-9016-7a47f2f2f124"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "9a731260-c2e9-4135-9016-7a47f2f2f124"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "60087a67-00c9-41ad-bcbb-8630aae16adc"}, "type": "Glyph", "id": "60087a67-00c9-41ad-bcbb-8630aae16adc"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "9a731260-c2e9-4135-9016-7a47f2f2f124"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "175fc486-fc67-48fd-be8c-f6b6f15bbb4d"}, "type": "Glyph", "id": "175fc486-fc67-48fd-be8c-f6b6f15bbb4d"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "07cd9211-36e8-4263-8927-c808314a5710"}, "doc": null, "renderers": [], "id": "7353d4d5-5a7b-4c37-be73-3945e1413367"}, "type": "HoverTool", "id": "7353d4d5-5a7b-4c37-be73-3945e1413367"}, {"attributes": {"plot": {"type": "Plot", "id": "07cd9211-36e8-4263-8927-c808314a5710"}, "id": "54c42045-231d-4635-9325-86f5da3f45b6", "doc": null}, "type": "ResizeTool", "id": "54c42045-231d-4635-9325-86f5da3f45b6"}, {"attributes": {"plot": {"type": "Plot", "id": "07cd9211-36e8-4263-8927-c808314a5710"}, "id": "21dd78d5-3d03-46cc-ba10-d2b59b741d2b", "doc": null}, "type": "PreviewSaveTool", "id": "21dd78d5-3d03-46cc-ba10-d2b59b741d2b"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "0b643176-9dc0-49a7-8eb5-b067fa5f51c0"}, "y_range": {"type": "FactorRange", "id": "c602c4fa-e18b-410c-9ed5-8a469484d2cb"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "30019f4e-fdd5-45da-a515-ee5e45d48af6"}, {"type": "Grid", "id": "68799592-7940-44ba-957a-5d56d7670d54"}, {"type": "CategoricalAxis", "id": "35b2c18f-ccf5-4a54-a2da-101c445038f0"}, {"type": "Grid", "id": "08f39177-d6a2-4c31-a158-3f31084f3f8b"}, {"type": "Glyph", "id": "60087a67-00c9-41ad-bcbb-8630aae16adc"}, {"type": "Glyph", "id": "175fc486-fc67-48fd-be8c-f6b6f15bbb4d"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "07cd9211-36e8-4263-8927-c808314a5710", "title": null, "tools": [{"type": "HoverTool", "id": "7353d4d5-5a7b-4c37-be73-3945e1413367"}, {"type": "ResizeTool", "id": "54c42045-231d-4635-9325-86f5da3f45b6"}, {"type": "PreviewSaveTool", "id": "21dd78d5-3d03-46cc-ba10-d2b59b741d2b"}], "canvas_width": 1200}, "type": "Plot", "id": "07cd9211-36e8-4263-8927-c808314a5710"}, {"attributes": {"doc": null, "id": "1ee6b4ca-7007-447e-962e-e86078f9b555"}, "type": "CategoricalTickFormatter", "id": "1ee6b4ca-7007-447e-962e-e86078f9b555"}, {"attributes": {"doc": null, "id": "29e380e0-442a-41d3-9bc6-c1f7d2502a3d"}, "type": "CategoricalTicker", "id": "29e380e0-442a-41d3-9bc6-c1f7d2502a3d"}, {"attributes": {"plot": {"type": "Plot", "id": "07cd9211-36e8-4263-8927-c808314a5710"}, "doc": null, "bounds": "auto", "id": "35b2c18f-ccf5-4a54-a2da-101c445038f0", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "1ee6b4ca-7007-447e-962e-e86078f9b555"}, "ticker": {"type": "CategoricalTicker", "id": "29e380e0-442a-41d3-9bc6-c1f7d2502a3d"}, "dimension": 1}, "type": "CategoricalAxis", "id": "35b2c18f-ccf5-4a54-a2da-101c445038f0"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "07cd9211-36e8-4263-8927-c808314a5710"}], "id": "e5e9429e-3bb2-4afb-8126-0099a6301a5d"}, "type": "PlotContext", "id": "e5e9429e-3bb2-4afb-8126-0099a6301a5d"}];
    var modeltype = "PlotContext";
    var elementid = "bdcceb6e-aebc-4ac9-9eb6-07bf49f5261b";
    var plotID = "07cd9211-36e8-4263-8927-c808314a5710";
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
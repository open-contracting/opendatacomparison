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

    var all_models = [{"attributes": {"doc": null, "id": "958cb5a1-c02d-401b-ab2a-55339d507708"}, "type": "CategoricalTickFormatter", "id": "958cb5a1-c02d-401b-ab2a-55339d507708"}, {"attributes": {"doc": null, "id": "cc2411c2-9d24-4712-ad25-8b121223f9ac", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "cc2411c2-9d24-4712-ad25-8b121223f9ac"}, {"attributes": {"doc": null, "id": "221e95f7-974e-43a4-affa-6f94b27c4d72", "factors": ["UY - ACCE - Tender Notices"]}, "type": "FactorRange", "id": "221e95f7-974e-43a4-affa-6f94b27c4d72"}, {"attributes": {"doc": null, "id": "7d0ffce7-441b-450e-ad5f-e75c6c2b883a"}, "type": "CategoricalTickFormatter", "id": "7d0ffce7-441b-450e-ad5f-e75c6c2b883a"}, {"attributes": {"doc": null, "id": "e8fc8f99-4ab6-4abf-8a8e-4e8563269f58"}, "type": "CategoricalTicker", "id": "e8fc8f99-4ab6-4abf-8a8e-4e8563269f58"}, {"attributes": {"plot": {"type": "Plot", "id": "a0b24dc5-90c0-4d13-9b20-e432128333f9"}, "doc": null, "bounds": "auto", "id": "83dbef99-d286-4671-b222-35ac7bcdc98e", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "7d0ffce7-441b-450e-ad5f-e75c6c2b883a"}, "ticker": {"type": "CategoricalTicker", "id": "e8fc8f99-4ab6-4abf-8a8e-4e8563269f58"}, "dimension": 0}, "type": "CategoricalAxis", "id": "83dbef99-d286-4671-b222-35ac7bcdc98e"}, {"attributes": {"doc": null, "id": "2f592343-a483-4bbd-afc4-c8ff88b10362"}, "type": "CategoricalTicker", "id": "2f592343-a483-4bbd-afc4-c8ff88b10362"}, {"attributes": {"plot": {"type": "Plot", "id": "a0b24dc5-90c0-4d13-9b20-e432128333f9"}, "doc": null, "bounds": "auto", "id": "79d45c09-53af-4718-a5dc-0a21fd544ae3", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "958cb5a1-c02d-401b-ab2a-55339d507708"}, "ticker": {"type": "CategoricalTicker", "id": "2f592343-a483-4bbd-afc4-c8ff88b10362"}, "dimension": 1}, "type": "CategoricalAxis", "id": "79d45c09-53af-4718-a5dc-0a21fd544ae3"}, {"attributes": {"plot": {"type": "Plot", "id": "a0b24dc5-90c0-4d13-9b20-e432128333f9"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "661b16da-7dbd-49b8-9720-6ec18cfa8ae5", "axis": {"type": "CategoricalAxis", "id": "79d45c09-53af-4718-a5dc-0a21fd544ae3"}}, "type": "Grid", "id": "661b16da-7dbd-49b8-9720-6ec18cfa8ae5"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [5, 5, 5, 0, 10, 0, 0, 5, 65, 0, 0, 0, 10, 25, 15], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["UY - ACCE - Tender Notices", "UY - ACCE - Tender Notices", "UY - ACCE - Tender Notices", "UY - ACCE - Tender Notices", "UY - ACCE - Tender Notices", "UY - ACCE - Tender Notices", "UY - ACCE - Tender Notices", "UY - ACCE - Tender Notices", "UY - ACCE - Tender Notices", "UY - ACCE - Tender Notices", "UY - ACCE - Tender Notices", "UY - ACCE - Tender Notices", "UY - ACCE - Tender Notices", "UY - ACCE - Tender Notices", "UY - ACCE - Tender Notices"], "fields_in_concept": ["Place of Purchase Specification", "Tender Price", "Type / Subtype", "", "Agency, Contact", "", "", "Tender", "Article, Article code, Color, Item, Mark, Presentation, Presentation measurement, Quantity, Subject Recruitment, Unit, Variant detail, Varient, Varient Measurement", "", "", "", "Called Issue Date, Date Last Modified", "Clarifications, Opening Ceremony, Reception of bids until the, Request for Clarification to, Request for extensions to the", "Number, request, State of the process"]}, "id": "93be4461-f25c-423b-bdc9-af4cc2425c23"}, "type": "ColumnDataSource", "id": "93be4461-f25c-423b-bdc9-af4cc2425c23"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "93be4461-f25c-423b-bdc9-af4cc2425c23"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "dfba67a6-f613-4107-9fa0-a1b3e5cb2d5a"}, "type": "Glyph", "id": "dfba67a6-f613-4107-9fa0-a1b3e5cb2d5a"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "93be4461-f25c-423b-bdc9-af4cc2425c23"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "a7f79fb6-7a90-46be-8f6c-2fd3d678f344"}, "type": "Glyph", "id": "a7f79fb6-7a90-46be-8f6c-2fd3d678f344"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "a0b24dc5-90c0-4d13-9b20-e432128333f9"}, "doc": null, "renderers": [], "id": "53a75baa-28aa-40df-8a39-6c0713aded4b"}, "type": "HoverTool", "id": "53a75baa-28aa-40df-8a39-6c0713aded4b"}, {"attributes": {"plot": {"type": "Plot", "id": "a0b24dc5-90c0-4d13-9b20-e432128333f9"}, "id": "a27d3095-ba65-4acf-ba4e-f9457ada83cd", "doc": null}, "type": "ResizeTool", "id": "a27d3095-ba65-4acf-ba4e-f9457ada83cd"}, {"attributes": {"plot": {"type": "Plot", "id": "a0b24dc5-90c0-4d13-9b20-e432128333f9"}, "id": "65035ad2-adc7-4e6d-b49a-8423de54dc2d", "doc": null}, "type": "PreviewSaveTool", "id": "65035ad2-adc7-4e6d-b49a-8423de54dc2d"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "cc2411c2-9d24-4712-ad25-8b121223f9ac"}, "y_range": {"type": "FactorRange", "id": "221e95f7-974e-43a4-affa-6f94b27c4d72"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "83dbef99-d286-4671-b222-35ac7bcdc98e"}, {"type": "Grid", "id": "ba118cfc-db9c-4af6-bffb-1f3d3020b017"}, {"type": "CategoricalAxis", "id": "79d45c09-53af-4718-a5dc-0a21fd544ae3"}, {"type": "Grid", "id": "661b16da-7dbd-49b8-9720-6ec18cfa8ae5"}, {"type": "Glyph", "id": "dfba67a6-f613-4107-9fa0-a1b3e5cb2d5a"}, {"type": "Glyph", "id": "a7f79fb6-7a90-46be-8f6c-2fd3d678f344"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "a0b24dc5-90c0-4d13-9b20-e432128333f9", "title": null, "tools": [{"type": "HoverTool", "id": "53a75baa-28aa-40df-8a39-6c0713aded4b"}, {"type": "ResizeTool", "id": "a27d3095-ba65-4acf-ba4e-f9457ada83cd"}, {"type": "PreviewSaveTool", "id": "65035ad2-adc7-4e6d-b49a-8423de54dc2d"}], "canvas_width": 1200}, "type": "Plot", "id": "a0b24dc5-90c0-4d13-9b20-e432128333f9"}, {"attributes": {"plot": {"type": "Plot", "id": "a0b24dc5-90c0-4d13-9b20-e432128333f9"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "ba118cfc-db9c-4af6-bffb-1f3d3020b017", "axis": {"type": "CategoricalAxis", "id": "83dbef99-d286-4671-b222-35ac7bcdc98e"}}, "type": "Grid", "id": "ba118cfc-db9c-4af6-bffb-1f3d3020b017"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "a0b24dc5-90c0-4d13-9b20-e432128333f9"}], "id": "a3b8a9f6-0025-47b7-bd44-595cc18c7665"}, "type": "PlotContext", "id": "a3b8a9f6-0025-47b7-bd44-595cc18c7665"}];
    var modeltype = "PlotContext";
    var elementid = "678b36f9-b4a9-4f59-8500-e0ce11fff494";
    var plotID = "a0b24dc5-90c0-4d13-9b20-e432128333f9";
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
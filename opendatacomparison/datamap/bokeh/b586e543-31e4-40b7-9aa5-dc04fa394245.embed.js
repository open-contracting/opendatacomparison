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

    var all_models = [{"attributes": {"doc": null, "id": "7324f343-72e7-4edf-ad96-d8664a54e4c7", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "7324f343-72e7-4edf-ad96-d8664a54e4c7"}, {"attributes": {"doc": null, "id": "a2f90e7c-3de8-4568-9649-74220428d1a4", "factors": ["MX - CompraNet - Contracts"]}, "type": "FactorRange", "id": "a2f90e7c-3de8-4568-9649-74220428d1a4"}, {"attributes": {"doc": null, "id": "d610d949-cd42-4789-b454-d9248f92df05"}, "type": "CategoricalTickFormatter", "id": "d610d949-cd42-4789-b454-d9248f92df05"}, {"attributes": {"doc": null, "id": "f1aa2030-ab4a-4889-b354-00f483cf6e46"}, "type": "CategoricalTicker", "id": "f1aa2030-ab4a-4889-b354-00f483cf6e46"}, {"attributes": {"plot": {"type": "Plot", "id": "b586e543-31e4-40b7-9aa5-dc04fa394245"}, "doc": null, "bounds": "auto", "id": "d0380fa1-9360-4a01-9f8c-65ed3e404221", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "d610d949-cd42-4789-b454-d9248f92df05"}, "ticker": {"type": "CategoricalTicker", "id": "f1aa2030-ab4a-4889-b354-00f483cf6e46"}, "dimension": 0}, "type": "CategoricalAxis", "id": "d0380fa1-9360-4a01-9f8c-65ed3e404221"}, {"attributes": {"plot": {"type": "Plot", "id": "b586e543-31e4-40b7-9aa5-dc04fa394245"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "76135fa6-f2ee-4bc1-b706-84126c55aad9", "axis": {"type": "CategoricalAxis", "id": "d0380fa1-9360-4a01-9f8c-65ed3e404221"}}, "type": "Grid", "id": "76135fa6-f2ee-4bc1-b706-84126c55aad9"}, {"attributes": {"doc": null, "id": "22cc4fd3-a701-4e6e-b1f5-a5f8fd32dbfa"}, "type": "CategoricalTickFormatter", "id": "22cc4fd3-a701-4e6e-b1f5-a5f8fd32dbfa"}, {"attributes": {"doc": null, "id": "fefdd1bd-3107-40bb-9b98-ca141d41c6de"}, "type": "CategoricalTicker", "id": "fefdd1bd-3107-40bb-9b98-ca141d41c6de"}, {"attributes": {"plot": {"type": "Plot", "id": "b586e543-31e4-40b7-9aa5-dc04fa394245"}, "doc": null, "bounds": "auto", "id": "6a00daee-d2dd-46a9-a418-225350bf77b2", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "22cc4fd3-a701-4e6e-b1f5-a5f8fd32dbfa"}, "ticker": {"type": "CategoricalTicker", "id": "fefdd1bd-3107-40bb-9b98-ca141d41c6de"}, "dimension": 1}, "type": "CategoricalAxis", "id": "6a00daee-d2dd-46a9-a418-225350bf77b2"}, {"attributes": {"plot": {"type": "Plot", "id": "b586e543-31e4-40b7-9aa5-dc04fa394245"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "032437d1-6861-4801-bb37-27157d422e26", "axis": {"type": "CategoricalAxis", "id": "6a00daee-d2dd-46a9-a418-225350bf77b2"}}, "type": "Grid", "id": "032437d1-6861-4801-bb37-27157d422e26"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [20, 10, 0, 0, 30, 35, 5, 0, 15, 0, 0, 15, 30, 20, 10], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["MX - CompraNet - Contracts", "MX - CompraNet - Contracts", "MX - CompraNet - Contracts", "MX - CompraNet - Contracts", "MX - CompraNet - Contracts", "MX - CompraNet - Contracts", "MX - CompraNet - Contracts", "MX - CompraNet - Contracts", "MX - CompraNet - Contracts", "MX - CompraNet - Contracts", "MX - CompraNet - Contracts", "MX - CompraNet - Contracts", "MX - CompraNet - Contracts", "MX - CompraNet - Contracts", "MX - CompraNet - Contracts"], "fields_in_concept": ["RECORD_TEMPLATE, FEDERAL_CONTRIBUTION, MUC_STRATIFICATION, ACCOUNT_MANAGER", "CONTRACT_VALUE, CURRENCY", "", "", "GOVERNMENT, ACRONYMS, UNIT, RESPONSIBLE, BRANCH, PROGRAM_KEY", "START_DATE, END_DATE, CONTRACT_STATUS, CELEBRATION_DATE, CONTRACT_FRAMEWORK, CONSOLIDATED_PURCHASE, MULTIYEAR", "CONTRACT_CODE", "", "RECORD_TITLE, PROCUREMENT_TYPE, CONTRACT_TITLE", "", "", "CONTRACTOR_PROVIDER, MPC_STRATIFICATION, COMPANY_STATUS", "UC KEY, UC NAME, RECORD_NUMBER, PROCESS PUBLICATION, PROCESS_FORM, ARCHIVED", "EXP_F_FALLO, OPENING_TENDER_DATE, CHARACTER, PROCESS_TYPE", "PROCEDURE_NUMBER, NOTICE"]}, "id": "f85b77cc-8110-46e6-be2a-260c9149b456"}, "type": "ColumnDataSource", "id": "f85b77cc-8110-46e6-be2a-260c9149b456"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "f85b77cc-8110-46e6-be2a-260c9149b456"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "5bcc09d7-e6d8-4e49-9720-4b0b331585be"}, "type": "Glyph", "id": "5bcc09d7-e6d8-4e49-9720-4b0b331585be"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "f85b77cc-8110-46e6-be2a-260c9149b456"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "8c18a820-5254-4585-b2b3-660f6a55cea8"}, "type": "Glyph", "id": "8c18a820-5254-4585-b2b3-660f6a55cea8"}, {"attributes": {"plot": {"type": "Plot", "id": "b586e543-31e4-40b7-9aa5-dc04fa394245"}, "id": "8c538ca1-a6ec-4a46-9a63-ef5451456665", "doc": null}, "type": "ResizeTool", "id": "8c538ca1-a6ec-4a46-9a63-ef5451456665"}, {"attributes": {"plot": {"type": "Plot", "id": "b586e543-31e4-40b7-9aa5-dc04fa394245"}, "id": "b1447ef0-4cc9-4bba-846f-86c6571b456f", "doc": null}, "type": "PreviewSaveTool", "id": "b1447ef0-4cc9-4bba-846f-86c6571b456f"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "7324f343-72e7-4edf-ad96-d8664a54e4c7"}, "y_range": {"type": "FactorRange", "id": "a2f90e7c-3de8-4568-9649-74220428d1a4"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "d0380fa1-9360-4a01-9f8c-65ed3e404221"}, {"type": "Grid", "id": "76135fa6-f2ee-4bc1-b706-84126c55aad9"}, {"type": "CategoricalAxis", "id": "6a00daee-d2dd-46a9-a418-225350bf77b2"}, {"type": "Grid", "id": "032437d1-6861-4801-bb37-27157d422e26"}, {"type": "Glyph", "id": "5bcc09d7-e6d8-4e49-9720-4b0b331585be"}, {"type": "Glyph", "id": "8c18a820-5254-4585-b2b3-660f6a55cea8"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "b586e543-31e4-40b7-9aa5-dc04fa394245", "title": null, "tools": [{"type": "HoverTool", "id": "a72fd7ad-1714-4204-b711-062bc23feb2b"}, {"type": "ResizeTool", "id": "8c538ca1-a6ec-4a46-9a63-ef5451456665"}, {"type": "PreviewSaveTool", "id": "b1447ef0-4cc9-4bba-846f-86c6571b456f"}], "canvas_width": 1200}, "type": "Plot", "id": "b586e543-31e4-40b7-9aa5-dc04fa394245"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "b586e543-31e4-40b7-9aa5-dc04fa394245"}, "doc": null, "renderers": [], "id": "a72fd7ad-1714-4204-b711-062bc23feb2b"}, "type": "HoverTool", "id": "a72fd7ad-1714-4204-b711-062bc23feb2b"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "b586e543-31e4-40b7-9aa5-dc04fa394245"}], "id": "0c33a0ad-9f42-4bd6-a708-ff01f5a88ac2"}, "type": "PlotContext", "id": "0c33a0ad-9f42-4bd6-a708-ff01f5a88ac2"}];
    var modeltype = "PlotContext";
    var elementid = "33b02cba-f802-4018-bfa7-ef653f5536f8";
    var plotID = "b586e543-31e4-40b7-9aa5-dc04fa394245";
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
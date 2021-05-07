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

    var all_models = [{"attributes": {"doc": null, "id": "d8babd6e-dbb4-4884-bdbb-7b0e6f8e37e2", "factors": ["CA - Buyandsell.gc.ca - Contract History"]}, "type": "FactorRange", "id": "d8babd6e-dbb4-4884-bdbb-7b0e6f8e37e2"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [25, 10, 5, 0, 50, 5, 5, 0, 15, 0, 0, 45, 10, 40, 0], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["CA - Buyandsell.gc.ca - Contract History", "CA - Buyandsell.gc.ca - Contract History", "CA - Buyandsell.gc.ca - Contract History", "CA - Buyandsell.gc.ca - Contract History", "CA - Buyandsell.gc.ca - Contract History", "CA - Buyandsell.gc.ca - Contract History", "CA - Buyandsell.gc.ca - Contract History", "CA - Buyandsell.gc.ca - Contract History", "CA - Buyandsell.gc.ca - Contract History", "CA - Buyandsell.gc.ca - Contract History", "CA - Buyandsell.gc.ca - Contract History", "CA - Buyandsell.gc.ca - Contract History", "CA - Buyandsell.gc.ca - Contract History", "CA - Buyandsell.gc.ca - Contract History", "CA - Buyandsell.gc.ca - Contract History"], "fields_in_concept": ["procurement-entity-name_en, procurement-entity-name_fr, trade-agreement, trade-agreement-description_en, trade-agreement-description_fr", "contract-value, total-contract-value", "award-date", "", "contracting-address-city, contracting-address-country, contracting-address-postal-code, contracting-address-prov-state, contracting-address-street-1, contracting-address-street-2, contracting-entity-office-name_en, contracting-entity-office-name_fr, end-user-entity_en, end-user-entity_fr", "expiry-date", "contract-number", "", "gsin, gsin-description_en, gsin-description_fr", "", "", "organization-employee-count_en, organization-employee-count_fr, supplier-address-city, supplier-address-country, supplier-address-postal-code, supplier-address-prov-state, supplier-legal-name, supplier-operating-name, supplier-standardized-name", "amendment-number, number-records", "competitive-tender_en, competitive-tender_fr, limited-tender-reason, limited-tender-reason-description_en, limited-tender-reason-description_fr, solicitation-procedure, solicitation-procedure-description_en, solicitation-procedure-description_fr", ""]}, "id": "444bda01-c220-4815-a29b-4e28cd3462b8"}, "type": "ColumnDataSource", "id": "444bda01-c220-4815-a29b-4e28cd3462b8"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "444bda01-c220-4815-a29b-4e28cd3462b8"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "327ea157-95c3-4d0b-a9aa-af9e703bb64f"}, "type": "Glyph", "id": "327ea157-95c3-4d0b-a9aa-af9e703bb64f"}, {"attributes": {"doc": null, "id": "ce9866f2-d25b-44a4-94b7-fb60f04da230"}, "type": "CategoricalTicker", "id": "ce9866f2-d25b-44a4-94b7-fb60f04da230"}, {"attributes": {"doc": null, "id": "0e13b937-1592-4f37-b541-05b96dae86db", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "0e13b937-1592-4f37-b541-05b96dae86db"}, {"attributes": {"doc": null, "id": "29e1bcd9-bf71-4ae2-a799-19e905956154"}, "type": "CategoricalTickFormatter", "id": "29e1bcd9-bf71-4ae2-a799-19e905956154"}, {"attributes": {"doc": null, "id": "074b16ac-0397-4d85-b6b6-28c7fc2ced37"}, "type": "CategoricalTicker", "id": "074b16ac-0397-4d85-b6b6-28c7fc2ced37"}, {"attributes": {"plot": {"type": "Plot", "id": "78ed9b8d-8e31-481f-9069-83292776c037"}, "doc": null, "bounds": "auto", "id": "61a80e5d-78c3-4e73-b4d8-9bc568560733", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "29e1bcd9-bf71-4ae2-a799-19e905956154"}, "ticker": {"type": "CategoricalTicker", "id": "074b16ac-0397-4d85-b6b6-28c7fc2ced37"}, "dimension": 0}, "type": "CategoricalAxis", "id": "61a80e5d-78c3-4e73-b4d8-9bc568560733"}, {"attributes": {"doc": null, "id": "5974970d-0b25-4bb6-9778-0a78283ad637"}, "type": "CategoricalTickFormatter", "id": "5974970d-0b25-4bb6-9778-0a78283ad637"}, {"attributes": {"plot": {"type": "Plot", "id": "78ed9b8d-8e31-481f-9069-83292776c037"}, "doc": null, "bounds": "auto", "id": "e23f77eb-1b52-46de-ba75-4899a7e8a2df", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "5974970d-0b25-4bb6-9778-0a78283ad637"}, "ticker": {"type": "CategoricalTicker", "id": "ce9866f2-d25b-44a4-94b7-fb60f04da230"}, "dimension": 1}, "type": "CategoricalAxis", "id": "e23f77eb-1b52-46de-ba75-4899a7e8a2df"}, {"attributes": {"plot": {"type": "Plot", "id": "78ed9b8d-8e31-481f-9069-83292776c037"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "d6060618-55ec-4d44-8433-fc275b93d37e", "axis": {"type": "CategoricalAxis", "id": "e23f77eb-1b52-46de-ba75-4899a7e8a2df"}}, "type": "Grid", "id": "d6060618-55ec-4d44-8433-fc275b93d37e"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "444bda01-c220-4815-a29b-4e28cd3462b8"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "68cbd795-8238-4157-a0a1-84c613fd93ed"}, "type": "Glyph", "id": "68cbd795-8238-4157-a0a1-84c613fd93ed"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "78ed9b8d-8e31-481f-9069-83292776c037"}, "doc": null, "renderers": [], "id": "5b6e74f0-7885-4170-a5bc-3edc98de61be"}, "type": "HoverTool", "id": "5b6e74f0-7885-4170-a5bc-3edc98de61be"}, {"attributes": {"plot": {"type": "Plot", "id": "78ed9b8d-8e31-481f-9069-83292776c037"}, "id": "6d09b632-9a6d-4975-8c64-bdc711205118", "doc": null}, "type": "ResizeTool", "id": "6d09b632-9a6d-4975-8c64-bdc711205118"}, {"attributes": {"plot": {"type": "Plot", "id": "78ed9b8d-8e31-481f-9069-83292776c037"}, "id": "7c34173e-ed1c-4742-96c7-4bb8f87c12f6", "doc": null}, "type": "PreviewSaveTool", "id": "7c34173e-ed1c-4742-96c7-4bb8f87c12f6"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "0e13b937-1592-4f37-b541-05b96dae86db"}, "y_range": {"type": "FactorRange", "id": "d8babd6e-dbb4-4884-bdbb-7b0e6f8e37e2"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "61a80e5d-78c3-4e73-b4d8-9bc568560733"}, {"type": "Grid", "id": "b71f87a8-d30e-4591-8cb5-2b01bc0c3b68"}, {"type": "CategoricalAxis", "id": "e23f77eb-1b52-46de-ba75-4899a7e8a2df"}, {"type": "Grid", "id": "d6060618-55ec-4d44-8433-fc275b93d37e"}, {"type": "Glyph", "id": "68cbd795-8238-4157-a0a1-84c613fd93ed"}, {"type": "Glyph", "id": "327ea157-95c3-4d0b-a9aa-af9e703bb64f"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "78ed9b8d-8e31-481f-9069-83292776c037", "title": null, "tools": [{"type": "HoverTool", "id": "5b6e74f0-7885-4170-a5bc-3edc98de61be"}, {"type": "ResizeTool", "id": "6d09b632-9a6d-4975-8c64-bdc711205118"}, {"type": "PreviewSaveTool", "id": "7c34173e-ed1c-4742-96c7-4bb8f87c12f6"}], "canvas_width": 1200}, "type": "Plot", "id": "78ed9b8d-8e31-481f-9069-83292776c037"}, {"attributes": {"plot": {"type": "Plot", "id": "78ed9b8d-8e31-481f-9069-83292776c037"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "b71f87a8-d30e-4591-8cb5-2b01bc0c3b68", "axis": {"type": "CategoricalAxis", "id": "61a80e5d-78c3-4e73-b4d8-9bc568560733"}}, "type": "Grid", "id": "b71f87a8-d30e-4591-8cb5-2b01bc0c3b68"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "78ed9b8d-8e31-481f-9069-83292776c037"}], "id": "6d96bbf6-4310-4aa8-81f4-f899c7d701c7"}, "type": "PlotContext", "id": "6d96bbf6-4310-4aa8-81f4-f899c7d701c7"}];
    var modeltype = "PlotContext";
    var elementid = "301a054e-86f0-4640-b8aa-c6cea03ab25d";
    var plotID = "78ed9b8d-8e31-481f-9069-83292776c037";
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
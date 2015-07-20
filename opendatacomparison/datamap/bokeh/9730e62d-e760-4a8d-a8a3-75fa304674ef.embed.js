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

    var all_models = [{"attributes": {"doc": null, "id": "48bfd16c-2428-41d0-958d-f66830729be5", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "48bfd16c-2428-41d0-958d-f66830729be5"}, {"attributes": {"doc": null, "id": "1ea84a3a-ddbc-4963-99e0-211c44a4b20f", "factors": ["CA - Buyandsell.gc.ca - Tenders Data"]}, "type": "FactorRange", "id": "1ea84a3a-ddbc-4963-99e0-211c44a4b20f"}, {"attributes": {"doc": null, "id": "607998f2-da74-40b2-97a1-2db337619a4e"}, "type": "CategoricalTickFormatter", "id": "607998f2-da74-40b2-97a1-2db337619a4e"}, {"attributes": {"doc": null, "id": "ce90fa05-bbcb-429d-b94e-3ee0b91367f6"}, "type": "CategoricalTicker", "id": "ce90fa05-bbcb-429d-b94e-3ee0b91367f6"}, {"attributes": {"plot": {"type": "Plot", "id": "9730e62d-e760-4a8d-a8a3-75fa304674ef"}, "doc": null, "bounds": "auto", "id": "8984e0bf-4205-4d75-99f0-bad78d97aa6f", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "607998f2-da74-40b2-97a1-2db337619a4e"}, "ticker": {"type": "CategoricalTicker", "id": "ce90fa05-bbcb-429d-b94e-3ee0b91367f6"}, "dimension": 0}, "type": "CategoricalAxis", "id": "8984e0bf-4205-4d75-99f0-bad78d97aa6f"}, {"attributes": {"plot": {"type": "Plot", "id": "9730e62d-e760-4a8d-a8a3-75fa304674ef"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "c924cb61-04ca-4f15-ae3c-e5e95fdc5d51", "axis": {"type": "CategoricalAxis", "id": "8984e0bf-4205-4d75-99f0-bad78d97aa6f"}}, "type": "Grid", "id": "c924cb61-04ca-4f15-ae3c-e5e95fdc5d51"}, {"attributes": {"doc": null, "id": "51e789ee-c7eb-43ea-8e14-90c4caf6cb73"}, "type": "CategoricalTickFormatter", "id": "51e789ee-c7eb-43ea-8e14-90c4caf6cb73"}, {"attributes": {"doc": null, "id": "398ad9d2-1b4a-4380-94d7-e9b2ebef34aa"}, "type": "CategoricalTicker", "id": "398ad9d2-1b4a-4380-94d7-e9b2ebef34aa"}, {"attributes": {"plot": {"type": "Plot", "id": "9730e62d-e760-4a8d-a8a3-75fa304674ef"}, "doc": null, "bounds": "auto", "id": "c9a89328-0639-48ac-bf60-8427623d00e8", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "51e789ee-c7eb-43ea-8e14-90c4caf6cb73"}, "ticker": {"type": "CategoricalTicker", "id": "398ad9d2-1b4a-4380-94d7-e9b2ebef34aa"}, "dimension": 1}, "type": "CategoricalAxis", "id": "c9a89328-0639-48ac-bf60-8427623d00e8"}, {"attributes": {"plot": {"type": "Plot", "id": "9730e62d-e760-4a8d-a8a3-75fa304674ef"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "b6fe9786-14c0-403e-a454-630cef53f230", "axis": {"type": "CategoricalAxis", "id": "c9a89328-0639-48ac-bf60-8427623d00e8"}}, "type": "Grid", "id": "b6fe9786-14c0-403e-a454-630cef53f230"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [10, 10, 5, 0, 10, 0, 5, 0, 15, 0, 0, 5, 25, 10, 10], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["CA - Buyandsell.gc.ca - Tenders Data", "CA - Buyandsell.gc.ca - Tenders Data", "CA - Buyandsell.gc.ca - Tenders Data", "CA - Buyandsell.gc.ca - Tenders Data", "CA - Buyandsell.gc.ca - Tenders Data", "CA - Buyandsell.gc.ca - Tenders Data", "CA - Buyandsell.gc.ca - Tenders Data", "CA - Buyandsell.gc.ca - Tenders Data", "CA - Buyandsell.gc.ca - Tenders Data", "CA - Buyandsell.gc.ca - Tenders Data", "CA - Buyandsell.gc.ca - Tenders Data", "CA - Buyandsell.gc.ca - Tenders Data", "CA - Buyandsell.gc.ca - Tenders Data", "CA - Buyandsell.gc.ca - Tenders Data", "CA - Buyandsell.gc.ca - Tenders Data"], "fields_in_concept": ["procurement_entity, procurement_entity_name", "contract_value, currency", "award_date", "", "customer_info, end_user_entity", "", "contract_number", "", "description, gsin, title", "", "", "supplier_info", "amendment_date, contract_sequence_number, language, publication_date, publishing_status", "contract_award_procedure, tendering_procedure", "reference_number, solicitation_number"]}, "id": "94cc196e-953b-4569-8714-363627519827"}, "type": "ColumnDataSource", "id": "94cc196e-953b-4569-8714-363627519827"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "94cc196e-953b-4569-8714-363627519827"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "419d4d7c-0700-47a5-b7ca-9fd263c4b5ed"}, "type": "Glyph", "id": "419d4d7c-0700-47a5-b7ca-9fd263c4b5ed"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "94cc196e-953b-4569-8714-363627519827"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "596e381a-af67-4c4f-917e-5c841c578f7d"}, "type": "Glyph", "id": "596e381a-af67-4c4f-917e-5c841c578f7d"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "9730e62d-e760-4a8d-a8a3-75fa304674ef"}, "doc": null, "renderers": [], "id": "0f211a3c-bb51-426d-ba0f-55141ba219af"}, "type": "HoverTool", "id": "0f211a3c-bb51-426d-ba0f-55141ba219af"}, {"attributes": {"plot": {"type": "Plot", "id": "9730e62d-e760-4a8d-a8a3-75fa304674ef"}, "id": "6d3e500b-bcb4-443b-8329-6a7d3fe4aee6", "doc": null}, "type": "ResizeTool", "id": "6d3e500b-bcb4-443b-8329-6a7d3fe4aee6"}, {"attributes": {"plot": {"type": "Plot", "id": "9730e62d-e760-4a8d-a8a3-75fa304674ef"}, "id": "728e2fb0-68f0-48e4-ab88-8cd1ea08a7ea", "doc": null}, "type": "PreviewSaveTool", "id": "728e2fb0-68f0-48e4-ab88-8cd1ea08a7ea"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "48bfd16c-2428-41d0-958d-f66830729be5"}, "y_range": {"type": "FactorRange", "id": "1ea84a3a-ddbc-4963-99e0-211c44a4b20f"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "8984e0bf-4205-4d75-99f0-bad78d97aa6f"}, {"type": "Grid", "id": "c924cb61-04ca-4f15-ae3c-e5e95fdc5d51"}, {"type": "CategoricalAxis", "id": "c9a89328-0639-48ac-bf60-8427623d00e8"}, {"type": "Grid", "id": "b6fe9786-14c0-403e-a454-630cef53f230"}, {"type": "Glyph", "id": "419d4d7c-0700-47a5-b7ca-9fd263c4b5ed"}, {"type": "Glyph", "id": "596e381a-af67-4c4f-917e-5c841c578f7d"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "9730e62d-e760-4a8d-a8a3-75fa304674ef", "title": null, "tools": [{"type": "HoverTool", "id": "0f211a3c-bb51-426d-ba0f-55141ba219af"}, {"type": "ResizeTool", "id": "6d3e500b-bcb4-443b-8329-6a7d3fe4aee6"}, {"type": "PreviewSaveTool", "id": "728e2fb0-68f0-48e4-ab88-8cd1ea08a7ea"}], "canvas_width": 1200}, "type": "Plot", "id": "9730e62d-e760-4a8d-a8a3-75fa304674ef"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "9730e62d-e760-4a8d-a8a3-75fa304674ef"}], "id": "a611d21f-27da-46ca-b919-f30a51d11733"}, "type": "PlotContext", "id": "a611d21f-27da-46ca-b919-f30a51d11733"}];
    var modeltype = "PlotContext";
    var elementid = "7e762ca2-525a-4784-9b94-733a37586d97";
    var plotID = "9730e62d-e760-4a8d-a8a3-75fa304674ef";
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
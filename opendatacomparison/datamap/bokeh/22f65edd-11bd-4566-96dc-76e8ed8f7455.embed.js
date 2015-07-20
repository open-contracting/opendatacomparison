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

    var all_models = [{"attributes": {"doc": null, "id": "1342dcf3-86d2-48f9-9c6f-c5b3103ff8a2", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "1342dcf3-86d2-48f9-9c6f-c5b3103ff8a2"}, {"attributes": {"doc": null, "id": "6cf44475-3c32-4297-95d6-2a0cb268cc78", "factors": ["CA - Buyandsell.gc.ca - Standing Offers and Supply Arrangements"]}, "type": "FactorRange", "id": "6cf44475-3c32-4297-95d6-2a0cb268cc78"}, {"attributes": {"doc": null, "id": "5dcce301-7a4b-4c83-9444-007c9a8311bc"}, "type": "CategoricalTickFormatter", "id": "5dcce301-7a4b-4c83-9444-007c9a8311bc"}, {"attributes": {"doc": null, "id": "016bdb89-3a3e-4744-bc9f-1aa38d5d52e8"}, "type": "CategoricalTicker", "id": "016bdb89-3a3e-4744-bc9f-1aa38d5d52e8"}, {"attributes": {"plot": {"type": "Plot", "id": "22f65edd-11bd-4566-96dc-76e8ed8f7455"}, "doc": null, "bounds": "auto", "id": "069d3412-b7b1-44b2-ac13-12b1144fe47f", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "5dcce301-7a4b-4c83-9444-007c9a8311bc"}, "ticker": {"type": "CategoricalTicker", "id": "016bdb89-3a3e-4744-bc9f-1aa38d5d52e8"}, "dimension": 0}, "type": "CategoricalAxis", "id": "069d3412-b7b1-44b2-ac13-12b1144fe47f"}, {"attributes": {"plot": {"type": "Plot", "id": "22f65edd-11bd-4566-96dc-76e8ed8f7455"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "d2ba5223-b780-4c3e-b297-47b826ccdd0a", "axis": {"type": "CategoricalAxis", "id": "069d3412-b7b1-44b2-ac13-12b1144fe47f"}}, "type": "Grid", "id": "d2ba5223-b780-4c3e-b297-47b826ccdd0a"}, {"attributes": {"doc": null, "id": "457a3414-db30-4c08-981f-5ea63d785baf"}, "type": "CategoricalTickFormatter", "id": "457a3414-db30-4c08-981f-5ea63d785baf"}, {"attributes": {"doc": null, "id": "cd9c1323-0354-424e-8c9a-39ab4f73ecbc"}, "type": "CategoricalTicker", "id": "cd9c1323-0354-424e-8c9a-39ab4f73ecbc"}, {"attributes": {"plot": {"type": "Plot", "id": "22f65edd-11bd-4566-96dc-76e8ed8f7455"}, "doc": null, "bounds": "auto", "id": "b9a7ea02-d132-4232-b0e9-39754db9ddad", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "457a3414-db30-4c08-981f-5ea63d785baf"}, "ticker": {"type": "CategoricalTicker", "id": "cd9c1323-0354-424e-8c9a-39ab4f73ecbc"}, "dimension": 1}, "type": "CategoricalAxis", "id": "b9a7ea02-d132-4232-b0e9-39754db9ddad"}, {"attributes": {"plot": {"type": "Plot", "id": "22f65edd-11bd-4566-96dc-76e8ed8f7455"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "ee18ed07-6d04-463d-9c75-c2b473dd99a0", "axis": {"type": "CategoricalAxis", "id": "b9a7ea02-d132-4232-b0e9-39754db9ddad"}}, "type": "Grid", "id": "ee18ed07-6d04-463d-9c75-c2b473dd99a0"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [25, 0, 10, 0, 10, 0, 5, 0, 25, 0, 0, 15, 0, 0, 0], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["CA - Buyandsell.gc.ca - Standing Offers and Supply Arrangements", "CA - Buyandsell.gc.ca - Standing Offers and Supply Arrangements", "CA - Buyandsell.gc.ca - Standing Offers and Supply Arrangements", "CA - Buyandsell.gc.ca - Standing Offers and Supply Arrangements", "CA - Buyandsell.gc.ca - Standing Offers and Supply Arrangements", "CA - Buyandsell.gc.ca - Standing Offers and Supply Arrangements", "CA - Buyandsell.gc.ca - Standing Offers and Supply Arrangements", "CA - Buyandsell.gc.ca - Standing Offers and Supply Arrangements", "CA - Buyandsell.gc.ca - Standing Offers and Supply Arrangements", "CA - Buyandsell.gc.ca - Standing Offers and Supply Arrangements", "CA - Buyandsell.gc.ca - Standing Offers and Supply Arrangements", "CA - Buyandsell.gc.ca - Standing Offers and Supply Arrangements", "CA - Buyandsell.gc.ca - Standing Offers and Supply Arrangements", "CA - Buyandsell.gc.ca - Standing Offers and Supply Arrangements", "CA - Buyandsell.gc.ca - Standing Offers and Supply Arrangements"], "fields_in_concept": ["delivery-point-code, delivery-point_en, delivery-point_fr, agreement-type_en, agreement-type_fr", "", "award-date, expiry-date", "", "end-user-entity_en, end-user-entity_fr", "", "agreement-number", "", "sosa-description_en, sosa-description_fr, gsin-description_en, gsin-description_fr, gsin", "", "", "supplier-standardized-name, supplier-legal-name, supplier-operating-name", "", "", ""]}, "id": "53588a85-51ac-4925-b16a-d6ec7b22d58a"}, "type": "ColumnDataSource", "id": "53588a85-51ac-4925-b16a-d6ec7b22d58a"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "53588a85-51ac-4925-b16a-d6ec7b22d58a"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "f089bc52-2aa9-4d1e-9bf9-b44f7a9e652c"}, "type": "Glyph", "id": "f089bc52-2aa9-4d1e-9bf9-b44f7a9e652c"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "53588a85-51ac-4925-b16a-d6ec7b22d58a"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "7529241d-752e-456a-a58c-bceb7bd3a029"}, "type": "Glyph", "id": "7529241d-752e-456a-a58c-bceb7bd3a029"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "22f65edd-11bd-4566-96dc-76e8ed8f7455"}, "doc": null, "renderers": [], "id": "8e612a0b-3591-4a01-8978-12dd1025bb55"}, "type": "HoverTool", "id": "8e612a0b-3591-4a01-8978-12dd1025bb55"}, {"attributes": {"plot": {"type": "Plot", "id": "22f65edd-11bd-4566-96dc-76e8ed8f7455"}, "id": "f904809e-b2de-452c-b885-3ced2ffb34ee", "doc": null}, "type": "ResizeTool", "id": "f904809e-b2de-452c-b885-3ced2ffb34ee"}, {"attributes": {"plot": {"type": "Plot", "id": "22f65edd-11bd-4566-96dc-76e8ed8f7455"}, "id": "ab1357e6-8d5c-4e5a-aec5-352344a0d779", "doc": null}, "type": "PreviewSaveTool", "id": "ab1357e6-8d5c-4e5a-aec5-352344a0d779"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "1342dcf3-86d2-48f9-9c6f-c5b3103ff8a2"}, "y_range": {"type": "FactorRange", "id": "6cf44475-3c32-4297-95d6-2a0cb268cc78"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "069d3412-b7b1-44b2-ac13-12b1144fe47f"}, {"type": "Grid", "id": "d2ba5223-b780-4c3e-b297-47b826ccdd0a"}, {"type": "CategoricalAxis", "id": "b9a7ea02-d132-4232-b0e9-39754db9ddad"}, {"type": "Grid", "id": "ee18ed07-6d04-463d-9c75-c2b473dd99a0"}, {"type": "Glyph", "id": "f089bc52-2aa9-4d1e-9bf9-b44f7a9e652c"}, {"type": "Glyph", "id": "7529241d-752e-456a-a58c-bceb7bd3a029"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "22f65edd-11bd-4566-96dc-76e8ed8f7455", "title": null, "tools": [{"type": "HoverTool", "id": "8e612a0b-3591-4a01-8978-12dd1025bb55"}, {"type": "ResizeTool", "id": "f904809e-b2de-452c-b885-3ced2ffb34ee"}, {"type": "PreviewSaveTool", "id": "ab1357e6-8d5c-4e5a-aec5-352344a0d779"}], "canvas_width": 1200}, "type": "Plot", "id": "22f65edd-11bd-4566-96dc-76e8ed8f7455"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "22f65edd-11bd-4566-96dc-76e8ed8f7455"}], "id": "a07e25c1-abbe-4275-ba79-7cad77bd850d"}, "type": "PlotContext", "id": "a07e25c1-abbe-4275-ba79-7cad77bd850d"}];
    var modeltype = "PlotContext";
    var elementid = "1a9ac76b-459d-4663-93b8-3cfdda9b794a";
    var plotID = "22f65edd-11bd-4566-96dc-76e8ed8f7455";
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
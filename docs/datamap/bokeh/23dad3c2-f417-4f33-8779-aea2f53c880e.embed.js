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

    var all_models = [{"attributes": {"doc": null, "id": "acf0398c-81ce-444d-9beb-e34129b8de88", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "acf0398c-81ce-444d-9beb-e34129b8de88"}, {"attributes": {"doc": null, "id": "f34c61f4-df5b-4ffc-a1d8-20de41848803", "factors": ["Data.unops.org - UNOPS - Contracts"]}, "type": "FactorRange", "id": "f34c61f4-df5b-4ffc-a1d8-20de41848803"}, {"attributes": {"doc": null, "id": "d3e5f372-1f3a-49ba-98a3-af3f5bb435b2"}, "type": "CategoricalTickFormatter", "id": "d3e5f372-1f3a-49ba-98a3-af3f5bb435b2"}, {"attributes": {"doc": null, "id": "a69b911b-c219-4aa6-8ae4-a02a36a8b5c6"}, "type": "CategoricalTicker", "id": "a69b911b-c219-4aa6-8ae4-a02a36a8b5c6"}, {"attributes": {"plot": {"type": "Plot", "id": "23dad3c2-f417-4f33-8779-aea2f53c880e"}, "doc": null, "bounds": "auto", "id": "161de4c7-81b0-470a-a852-d844ea2d2b47", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "d3e5f372-1f3a-49ba-98a3-af3f5bb435b2"}, "ticker": {"type": "CategoricalTicker", "id": "a69b911b-c219-4aa6-8ae4-a02a36a8b5c6"}, "dimension": 0}, "type": "CategoricalAxis", "id": "161de4c7-81b0-470a-a852-d844ea2d2b47"}, {"attributes": {"plot": {"type": "Plot", "id": "23dad3c2-f417-4f33-8779-aea2f53c880e"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "4e4706a6-0c93-4a62-9835-65889df28c31", "axis": {"type": "CategoricalAxis", "id": "161de4c7-81b0-470a-a852-d844ea2d2b47"}}, "type": "Grid", "id": "4e4706a6-0c93-4a62-9835-65889df28c31"}, {"attributes": {"doc": null, "id": "49f89c04-7623-489d-b436-905868a7166f"}, "type": "CategoricalTickFormatter", "id": "49f89c04-7623-489d-b436-905868a7166f"}, {"attributes": {"doc": null, "id": "85ab538b-9efb-4985-8097-f02c830c2ce9"}, "type": "CategoricalTicker", "id": "85ab538b-9efb-4985-8097-f02c830c2ce9"}, {"attributes": {"plot": {"type": "Plot", "id": "23dad3c2-f417-4f33-8779-aea2f53c880e"}, "doc": null, "bounds": "auto", "id": "9853efe0-ad53-405a-ab7c-e0c738c58c41", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "49f89c04-7623-489d-b436-905868a7166f"}, "ticker": {"type": "CategoricalTicker", "id": "85ab538b-9efb-4985-8097-f02c830c2ce9"}, "dimension": 1}, "type": "CategoricalAxis", "id": "9853efe0-ad53-405a-ab7c-e0c738c58c41"}, {"attributes": {"plot": {"type": "Plot", "id": "23dad3c2-f417-4f33-8779-aea2f53c880e"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "557fd7ec-2d85-420a-b4e9-ce366b0d666b", "axis": {"type": "CategoricalAxis", "id": "9853efe0-ad53-405a-ab7c-e0c738c58c41"}}, "type": "Grid", "id": "557fd7ec-2d85-420a-b4e9-ce366b0d666b"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [10, 5, 0, 0, 5, 0, 10, 0, 5, 0, 0, 10, 5, 0, 0], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["Data.unops.org - UNOPS - Contracts", "Data.unops.org - UNOPS - Contracts", "Data.unops.org - UNOPS - Contracts", "Data.unops.org - UNOPS - Contracts", "Data.unops.org - UNOPS - Contracts", "Data.unops.org - UNOPS - Contracts", "Data.unops.org - UNOPS - Contracts", "Data.unops.org - UNOPS - Contracts", "Data.unops.org - UNOPS - Contracts", "Data.unops.org - UNOPS - Contracts", "Data.unops.org - UNOPS - Contracts", "Data.unops.org - UNOPS - Contracts", "Data.unops.org - UNOPS - Contracts", "Data.unops.org - UNOPS - Contracts", "Data.unops.org - UNOPS - Contracts"], "fields_in_concept": ["DONORS, SPONSORS", "PO_AMOUNT_USD", "", "", "PROJECT_COUNTRY_DESCR", "", "CONTRACT_NUMBER, PO_DT", "", "PO_DESCR", "", "", "VENDOR_COUNTRY, VENDOR_NAME", "ROW_NUM", "", ""]}, "id": "cb78037b-2394-49f2-9ebb-515936dec714"}, "type": "ColumnDataSource", "id": "cb78037b-2394-49f2-9ebb-515936dec714"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "cb78037b-2394-49f2-9ebb-515936dec714"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "a6caed52-53e7-4b30-8456-9e8336f3d694"}, "type": "Glyph", "id": "a6caed52-53e7-4b30-8456-9e8336f3d694"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "cb78037b-2394-49f2-9ebb-515936dec714"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "32aa220e-fc0d-42ab-b6e7-4bf2595e5ab2"}, "type": "Glyph", "id": "32aa220e-fc0d-42ab-b6e7-4bf2595e5ab2"}, {"attributes": {"plot": {"type": "Plot", "id": "23dad3c2-f417-4f33-8779-aea2f53c880e"}, "id": "bea33d27-9bdd-4572-8026-a6676e82a48c", "doc": null}, "type": "ResizeTool", "id": "bea33d27-9bdd-4572-8026-a6676e82a48c"}, {"attributes": {"plot": {"type": "Plot", "id": "23dad3c2-f417-4f33-8779-aea2f53c880e"}, "id": "8ea04e9a-6507-42c1-b619-e6ef25c42f32", "doc": null}, "type": "PreviewSaveTool", "id": "8ea04e9a-6507-42c1-b619-e6ef25c42f32"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "acf0398c-81ce-444d-9beb-e34129b8de88"}, "y_range": {"type": "FactorRange", "id": "f34c61f4-df5b-4ffc-a1d8-20de41848803"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "161de4c7-81b0-470a-a852-d844ea2d2b47"}, {"type": "Grid", "id": "4e4706a6-0c93-4a62-9835-65889df28c31"}, {"type": "CategoricalAxis", "id": "9853efe0-ad53-405a-ab7c-e0c738c58c41"}, {"type": "Grid", "id": "557fd7ec-2d85-420a-b4e9-ce366b0d666b"}, {"type": "Glyph", "id": "a6caed52-53e7-4b30-8456-9e8336f3d694"}, {"type": "Glyph", "id": "32aa220e-fc0d-42ab-b6e7-4bf2595e5ab2"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "23dad3c2-f417-4f33-8779-aea2f53c880e", "title": null, "tools": [{"type": "HoverTool", "id": "f3345328-f4d1-45be-b5da-b9845075eb0a"}, {"type": "ResizeTool", "id": "bea33d27-9bdd-4572-8026-a6676e82a48c"}, {"type": "PreviewSaveTool", "id": "8ea04e9a-6507-42c1-b619-e6ef25c42f32"}], "canvas_width": 1200}, "type": "Plot", "id": "23dad3c2-f417-4f33-8779-aea2f53c880e"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "23dad3c2-f417-4f33-8779-aea2f53c880e"}, "doc": null, "renderers": [], "id": "f3345328-f4d1-45be-b5da-b9845075eb0a"}, "type": "HoverTool", "id": "f3345328-f4d1-45be-b5da-b9845075eb0a"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "23dad3c2-f417-4f33-8779-aea2f53c880e"}], "id": "e8204461-cbdb-498c-a35d-a6ad33256cfa"}, "type": "PlotContext", "id": "e8204461-cbdb-498c-a35d-a6ad33256cfa"}];
    var modeltype = "PlotContext";
    var elementid = "39e208c2-98be-442f-8506-dc18b6aee414";
    var plotID = "23dad3c2-f417-4f33-8779-aea2f53c880e";
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
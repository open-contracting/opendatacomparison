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

    var all_models = [{"attributes": {"doc": null, "id": "14e0321f-c6d7-4390-8259-915205bbca01", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "14e0321f-c6d7-4390-8259-915205bbca01"}, {"attributes": {"doc": null, "id": "27d7a7aa-4963-42d4-80e1-c7dcffe77a77", "factors": ["KP - KONEPS - Contracts"]}, "type": "FactorRange", "id": "27d7a7aa-4963-42d4-80e1-c7dcffe77a77"}, {"attributes": {"plot": {"type": "Plot", "id": "91b037b4-8426-4fd1-b13c-fb1ab051ae78"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "bde73220-7413-4167-8846-09f94b01edb3", "axis": {"type": "CategoricalAxis", "id": "2f92dd46-0f90-46b0-989d-a388c8c69221"}}, "type": "Grid", "id": "bde73220-7413-4167-8846-09f94b01edb3"}, {"attributes": {"doc": null, "id": "494ae33b-b020-4ecb-a83d-063ac139c17f"}, "type": "CategoricalTickFormatter", "id": "494ae33b-b020-4ecb-a83d-063ac139c17f"}, {"attributes": {"doc": null, "id": "be75508d-0051-42c3-85b0-da8ee89df3a0"}, "type": "CategoricalTicker", "id": "be75508d-0051-42c3-85b0-da8ee89df3a0"}, {"attributes": {"plot": {"type": "Plot", "id": "91b037b4-8426-4fd1-b13c-fb1ab051ae78"}, "doc": null, "bounds": "auto", "id": "3e5204f1-f111-420b-a6c6-fd037ae444c2", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "494ae33b-b020-4ecb-a83d-063ac139c17f"}, "ticker": {"type": "CategoricalTicker", "id": "be75508d-0051-42c3-85b0-da8ee89df3a0"}, "dimension": 1}, "type": "CategoricalAxis", "id": "3e5204f1-f111-420b-a6c6-fd037ae444c2"}, {"attributes": {"plot": {"type": "Plot", "id": "91b037b4-8426-4fd1-b13c-fb1ab051ae78"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "1410aa63-81f8-426e-aa23-3f9de4ead057", "axis": {"type": "CategoricalAxis", "id": "3e5204f1-f111-420b-a6c6-fd037ae444c2"}}, "type": "Grid", "id": "1410aa63-81f8-426e-aa23-3f9de4ead057"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [120, 75, 25, 0, 15, 35, 0, 0, 15, 0, 0, 10, 0, 45, 5], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["KP - KONEPS - Contracts", "KP - KONEPS - Contracts", "KP - KONEPS - Contracts", "KP - KONEPS - Contracts", "KP - KONEPS - Contracts", "KP - KONEPS - Contracts", "KP - KONEPS - Contracts", "KP - KONEPS - Contracts", "KP - KONEPS - Contracts", "KP - KONEPS - Contracts", "KP - KONEPS - Contracts", "KP - KONEPS - Contracts", "KP - KONEPS - Contracts", "KP - KONEPS - Contracts", "KP - KONEPS - Contracts"], "fields_in_concept": ["Applicable laws and regulations, Bidding orders, Bond Purchases, Category Name any contract obligations, Construction site, Date of wicket, Deposit rate, Fee exemption, Guaranteed amount, How to code in a contract, National Housing Bonds, New long-term Category Name, Notice whether the request target, Ownership, Regional co-contractor obligations, Regional co-contractor obligations ratio, Technology Review Contact Name, The bond company 1, The bond company 2, The bond company 3, Whether or not a joint obligation contract area, Whether people long-term, Whether the notice referred, Whether the person targeted PQ", "Amount of government issue, Based on the amount, Bookkeeping total contract amount, Construction will amount, Contract Amount, Contract fee, Design cost, Estimated price, Geumcha amount of research, Government issue amount of contractors, Now government issue government issue amount, Planned price, The highest bid, The total amount of bookkeeping research, Total construction budget amount", "Date of receipt, Date of Technical Review, Nakchalyul, Tuchal embroidery, Whether or not a joint contract", "", "Branch Office Name, Jurisdiction Category Name, Public Organization", "Construction period leads, Days of delay, Fixed date contract, Period, Reason for exceeding the number of days, Standard delivery days can, The total number of days required", "", "", "0 kinds of people, 04 people, Construction Management Code", "", "", "Contact Name, Name one trillion months", "", "Country marketplaces Publication Date, Date of Announcement, Date of publication based on the amount, How people bid, How to code a bid, In how people deal, Tender Release Date, The standard way people contract, Whether international bidding", "Tender notice number"]}, "id": "1c82209a-54ef-4d5c-adb2-f67f23c2a1ce"}, "type": "ColumnDataSource", "id": "1c82209a-54ef-4d5c-adb2-f67f23c2a1ce"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "1c82209a-54ef-4d5c-adb2-f67f23c2a1ce"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "20289b0d-c94b-4b2c-bd13-3ecd24191b31"}, "type": "Glyph", "id": "20289b0d-c94b-4b2c-bd13-3ecd24191b31"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "1c82209a-54ef-4d5c-adb2-f67f23c2a1ce"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "e341218c-960b-4318-9344-eda44d055064"}, "type": "Glyph", "id": "e341218c-960b-4318-9344-eda44d055064"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "91b037b4-8426-4fd1-b13c-fb1ab051ae78"}, "doc": null, "renderers": [], "id": "949ba174-5f56-4a93-8115-c48708de011a"}, "type": "HoverTool", "id": "949ba174-5f56-4a93-8115-c48708de011a"}, {"attributes": {"plot": {"type": "Plot", "id": "91b037b4-8426-4fd1-b13c-fb1ab051ae78"}, "id": "e9d78310-1b49-4af7-82ae-0fa2855ba7a2", "doc": null}, "type": "ResizeTool", "id": "e9d78310-1b49-4af7-82ae-0fa2855ba7a2"}, {"attributes": {"plot": {"type": "Plot", "id": "91b037b4-8426-4fd1-b13c-fb1ab051ae78"}, "id": "7745982a-e375-43c7-8b72-9f186e9d2897", "doc": null}, "type": "PreviewSaveTool", "id": "7745982a-e375-43c7-8b72-9f186e9d2897"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "14e0321f-c6d7-4390-8259-915205bbca01"}, "y_range": {"type": "FactorRange", "id": "27d7a7aa-4963-42d4-80e1-c7dcffe77a77"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "2f92dd46-0f90-46b0-989d-a388c8c69221"}, {"type": "Grid", "id": "bde73220-7413-4167-8846-09f94b01edb3"}, {"type": "CategoricalAxis", "id": "3e5204f1-f111-420b-a6c6-fd037ae444c2"}, {"type": "Grid", "id": "1410aa63-81f8-426e-aa23-3f9de4ead057"}, {"type": "Glyph", "id": "20289b0d-c94b-4b2c-bd13-3ecd24191b31"}, {"type": "Glyph", "id": "e341218c-960b-4318-9344-eda44d055064"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "91b037b4-8426-4fd1-b13c-fb1ab051ae78", "title": null, "tools": [{"type": "HoverTool", "id": "949ba174-5f56-4a93-8115-c48708de011a"}, {"type": "ResizeTool", "id": "e9d78310-1b49-4af7-82ae-0fa2855ba7a2"}, {"type": "PreviewSaveTool", "id": "7745982a-e375-43c7-8b72-9f186e9d2897"}], "canvas_width": 1200}, "type": "Plot", "id": "91b037b4-8426-4fd1-b13c-fb1ab051ae78"}, {"attributes": {"doc": null, "id": "d760051f-ae63-49aa-a8a1-bcac90f06fb4"}, "type": "CategoricalTickFormatter", "id": "d760051f-ae63-49aa-a8a1-bcac90f06fb4"}, {"attributes": {"doc": null, "id": "0bcf848b-c4af-4bb8-8179-7a1a86809897"}, "type": "CategoricalTicker", "id": "0bcf848b-c4af-4bb8-8179-7a1a86809897"}, {"attributes": {"plot": {"type": "Plot", "id": "91b037b4-8426-4fd1-b13c-fb1ab051ae78"}, "doc": null, "bounds": "auto", "id": "2f92dd46-0f90-46b0-989d-a388c8c69221", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "d760051f-ae63-49aa-a8a1-bcac90f06fb4"}, "ticker": {"type": "CategoricalTicker", "id": "0bcf848b-c4af-4bb8-8179-7a1a86809897"}, "dimension": 0}, "type": "CategoricalAxis", "id": "2f92dd46-0f90-46b0-989d-a388c8c69221"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "91b037b4-8426-4fd1-b13c-fb1ab051ae78"}], "id": "51467004-d225-4370-8a11-c76fe27a46b9"}, "type": "PlotContext", "id": "51467004-d225-4370-8a11-c76fe27a46b9"}];
    var modeltype = "PlotContext";
    var elementid = "5d3ff354-9a98-435b-9f9f-87b09ee6a3a1";
    var plotID = "91b037b4-8426-4fd1-b13c-fb1ab051ae78";
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
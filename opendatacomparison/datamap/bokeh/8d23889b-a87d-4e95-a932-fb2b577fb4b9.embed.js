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

    var all_models = [{"attributes": {"doc": null, "id": "3d5e857e-a257-4343-a51e-366910880950"}, "type": "CategoricalTickFormatter", "id": "3d5e857e-a257-4343-a51e-366910880950"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [10, 5, 0, 0, 5, 5, 10, 0, 10, 0, 0, 5, 0, 10, 5], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["MX - CompraNet - CompraNet 3.0 Tenders ", "MX - CompraNet - CompraNet 3.0 Tenders ", "MX - CompraNet - CompraNet 3.0 Tenders ", "MX - CompraNet - CompraNet 3.0 Tenders ", "MX - CompraNet - CompraNet 3.0 Tenders ", "MX - CompraNet - CompraNet 3.0 Tenders ", "MX - CompraNet - CompraNet 3.0 Tenders ", "MX - CompraNet - CompraNet 3.0 Tenders ", "MX - CompraNet - CompraNet 3.0 Tenders ", "MX - CompraNet - CompraNet 3.0 Tenders ", "MX - CompraNet - CompraNet 3.0 Tenders ", "MX - CompraNet - CompraNet 3.0 Tenders ", "MX - CompraNet - CompraNet 3.0 Tenders ", "MX - CompraNet - CompraNet 3.0 Tenders ", "MX - CompraNet - CompraNet 3.0 Tenders "], "fields_in_concept": ["KEY UC, UC NAME", "AMOUNT MN Exc", "", "", "UNIT / ENTITY", "DATE SIGNATURE OF CONTRACT", "CONTRACT NUMBER, URL OF CONTRACT", "", "CONTRACT TYPE, REFERENCE IN PROCUREMENT", "", "", "COMPANY NAME", "", "CHARACTER, TYPE OF PROCEDURE", "NUMBER OF PROCEDURE"]}, "id": "0071f009-5428-4d5e-a13c-43b4ec2814ba"}, "type": "ColumnDataSource", "id": "0071f009-5428-4d5e-a13c-43b4ec2814ba"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "0071f009-5428-4d5e-a13c-43b4ec2814ba"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "1c1eaadb-3780-41c9-b1a0-3dd8364e10ca"}, "type": "Glyph", "id": "1c1eaadb-3780-41c9-b1a0-3dd8364e10ca"}, {"attributes": {"doc": null, "id": "aff6351e-c2f0-4ddf-a0ef-abf4a441466f"}, "type": "CategoricalTicker", "id": "aff6351e-c2f0-4ddf-a0ef-abf4a441466f"}, {"attributes": {"doc": null, "id": "85117631-57ec-4139-ba57-674710d61156", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "85117631-57ec-4139-ba57-674710d61156"}, {"attributes": {"doc": null, "id": "dc3e8b13-a201-4a30-9344-8ef47bb97e17", "factors": ["MX - CompraNet - CompraNet 3.0 Tenders "]}, "type": "FactorRange", "id": "dc3e8b13-a201-4a30-9344-8ef47bb97e17"}, {"attributes": {"doc": null, "id": "6e449afd-6670-47e3-888b-7961df83fcd7"}, "type": "CategoricalTickFormatter", "id": "6e449afd-6670-47e3-888b-7961df83fcd7"}, {"attributes": {"doc": null, "id": "bde655bb-55ad-48f2-a496-d75d2bb82214"}, "type": "CategoricalTicker", "id": "bde655bb-55ad-48f2-a496-d75d2bb82214"}, {"attributes": {"plot": {"type": "Plot", "id": "8d23889b-a87d-4e95-a932-fb2b577fb4b9"}, "doc": null, "bounds": "auto", "id": "46fc6f8c-5474-468a-8016-51577b01049c", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "6e449afd-6670-47e3-888b-7961df83fcd7"}, "ticker": {"type": "CategoricalTicker", "id": "bde655bb-55ad-48f2-a496-d75d2bb82214"}, "dimension": 0}, "type": "CategoricalAxis", "id": "46fc6f8c-5474-468a-8016-51577b01049c"}, {"attributes": {"plot": {"type": "Plot", "id": "8d23889b-a87d-4e95-a932-fb2b577fb4b9"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "c13b6347-e51f-44a3-9d01-2e26d18539e1", "axis": {"type": "CategoricalAxis", "id": "46fc6f8c-5474-468a-8016-51577b01049c"}}, "type": "Grid", "id": "c13b6347-e51f-44a3-9d01-2e26d18539e1"}, {"attributes": {"plot": {"type": "Plot", "id": "8d23889b-a87d-4e95-a932-fb2b577fb4b9"}, "doc": null, "bounds": "auto", "id": "38e7784a-afc8-4492-8713-279abb8d067a", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "3d5e857e-a257-4343-a51e-366910880950"}, "ticker": {"type": "CategoricalTicker", "id": "aff6351e-c2f0-4ddf-a0ef-abf4a441466f"}, "dimension": 1}, "type": "CategoricalAxis", "id": "38e7784a-afc8-4492-8713-279abb8d067a"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "0071f009-5428-4d5e-a13c-43b4ec2814ba"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "aca3cd86-f68c-4251-bd3f-df7bbe1a3258"}, "type": "Glyph", "id": "aca3cd86-f68c-4251-bd3f-df7bbe1a3258"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "8d23889b-a87d-4e95-a932-fb2b577fb4b9"}, "doc": null, "renderers": [], "id": "fad1b46d-9731-4fc2-b5b8-2cbdfaaef482"}, "type": "HoverTool", "id": "fad1b46d-9731-4fc2-b5b8-2cbdfaaef482"}, {"attributes": {"plot": {"type": "Plot", "id": "8d23889b-a87d-4e95-a932-fb2b577fb4b9"}, "id": "0a1e3a33-0390-4972-8521-4389cb3b7ba0", "doc": null}, "type": "ResizeTool", "id": "0a1e3a33-0390-4972-8521-4389cb3b7ba0"}, {"attributes": {"plot": {"type": "Plot", "id": "8d23889b-a87d-4e95-a932-fb2b577fb4b9"}, "id": "b7e874c1-b1c4-49ca-8fa4-361e90f15abe", "doc": null}, "type": "PreviewSaveTool", "id": "b7e874c1-b1c4-49ca-8fa4-361e90f15abe"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "85117631-57ec-4139-ba57-674710d61156"}, "y_range": {"type": "FactorRange", "id": "dc3e8b13-a201-4a30-9344-8ef47bb97e17"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "46fc6f8c-5474-468a-8016-51577b01049c"}, {"type": "Grid", "id": "c13b6347-e51f-44a3-9d01-2e26d18539e1"}, {"type": "CategoricalAxis", "id": "38e7784a-afc8-4492-8713-279abb8d067a"}, {"type": "Grid", "id": "252c33cb-3f8b-4b21-a2b8-79f080ad1e2e"}, {"type": "Glyph", "id": "aca3cd86-f68c-4251-bd3f-df7bbe1a3258"}, {"type": "Glyph", "id": "1c1eaadb-3780-41c9-b1a0-3dd8364e10ca"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "8d23889b-a87d-4e95-a932-fb2b577fb4b9", "title": null, "tools": [{"type": "HoverTool", "id": "fad1b46d-9731-4fc2-b5b8-2cbdfaaef482"}, {"type": "ResizeTool", "id": "0a1e3a33-0390-4972-8521-4389cb3b7ba0"}, {"type": "PreviewSaveTool", "id": "b7e874c1-b1c4-49ca-8fa4-361e90f15abe"}], "canvas_width": 1200}, "type": "Plot", "id": "8d23889b-a87d-4e95-a932-fb2b577fb4b9"}, {"attributes": {"plot": {"type": "Plot", "id": "8d23889b-a87d-4e95-a932-fb2b577fb4b9"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "252c33cb-3f8b-4b21-a2b8-79f080ad1e2e", "axis": {"type": "CategoricalAxis", "id": "38e7784a-afc8-4492-8713-279abb8d067a"}}, "type": "Grid", "id": "252c33cb-3f8b-4b21-a2b8-79f080ad1e2e"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "8d23889b-a87d-4e95-a932-fb2b577fb4b9"}], "id": "772c0fa1-e603-42e6-924a-8ce8080c92bf"}, "type": "PlotContext", "id": "772c0fa1-e603-42e6-924a-8ce8080c92bf"}];
    var modeltype = "PlotContext";
    var elementid = "cce81653-44f0-4b32-94e7-b6b14b1c03c7";
    var plotID = "8d23889b-a87d-4e95-a932-fb2b577fb4b9";
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
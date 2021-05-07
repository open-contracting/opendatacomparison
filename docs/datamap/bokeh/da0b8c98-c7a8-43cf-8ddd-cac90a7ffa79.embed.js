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

    var all_models = [{"attributes": {"doc": null, "id": "67be914f-c6bd-4c04-b6e6-6bacb3684424"}, "type": "CategoricalTickFormatter", "id": "67be914f-c6bd-4c04-b6e6-6bacb3684424"}, {"attributes": {"doc": null, "id": "4c9a7873-d951-49c8-a615-619c38bfb6c4", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "4c9a7873-d951-49c8-a615-619c38bfb6c4"}, {"attributes": {"doc": null, "id": "ec21360f-a38b-4918-b2d8-c4021a8991f0", "factors": ["GE - Tender Monitor \u2013 Tender Data"]}, "type": "FactorRange", "id": "ec21360f-a38b-4918-b2d8-c4021a8991f0"}, {"attributes": {"doc": null, "id": "36ed06c0-07e3-4346-9c04-76a31e4c9c45"}, "type": "CategoricalTicker", "id": "36ed06c0-07e3-4346-9c04-76a31e4c9c45"}, {"attributes": {"plot": {"type": "Plot", "id": "da0b8c98-c7a8-43cf-8ddd-cac90a7ffa79"}, "doc": null, "bounds": "auto", "id": "539bece2-e046-4603-95b1-0242295a96e9", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "67be914f-c6bd-4c04-b6e6-6bacb3684424"}, "ticker": {"type": "CategoricalTicker", "id": "36ed06c0-07e3-4346-9c04-76a31e4c9c45"}, "dimension": 0}, "type": "CategoricalAxis", "id": "539bece2-e046-4603-95b1-0242295a96e9"}, {"attributes": {"plot": {"type": "Plot", "id": "da0b8c98-c7a8-43cf-8ddd-cac90a7ffa79"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "ba5a4435-1307-42e9-b0c5-97a836eeb724", "axis": {"type": "CategoricalAxis", "id": "539bece2-e046-4603-95b1-0242295a96e9"}}, "type": "Grid", "id": "ba5a4435-1307-42e9-b0c5-97a836eeb724"}, {"attributes": {"doc": null, "id": "b113933f-6b00-407e-98cb-c3a69ef20bca"}, "type": "CategoricalTickFormatter", "id": "b113933f-6b00-407e-98cb-c3a69ef20bca"}, {"attributes": {"doc": null, "id": "cee6fea8-a3c7-43a0-b0da-6404faf26f26"}, "type": "CategoricalTicker", "id": "cee6fea8-a3c7-43a0-b0da-6404faf26f26"}, {"attributes": {"plot": {"type": "Plot", "id": "da0b8c98-c7a8-43cf-8ddd-cac90a7ffa79"}, "doc": null, "bounds": "auto", "id": "184d80f8-1272-4759-83c0-44d3dc0d6360", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "b113933f-6b00-407e-98cb-c3a69ef20bca"}, "ticker": {"type": "CategoricalTicker", "id": "cee6fea8-a3c7-43a0-b0da-6404faf26f26"}, "dimension": 1}, "type": "CategoricalAxis", "id": "184d80f8-1272-4759-83c0-44d3dc0d6360"}, {"attributes": {"plot": {"type": "Plot", "id": "da0b8c98-c7a8-43cf-8ddd-cac90a7ffa79"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "d7a97e0e-29a8-4350-97ec-32346bb2cdee", "axis": {"type": "CategoricalAxis", "id": "184d80f8-1272-4759-83c0-44d3dc0d6360"}}, "type": "Grid", "id": "d7a97e0e-29a8-4350-97ec-32346bb2cdee"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [25, 15, 20, 0, 15, 0, 0, 0, 10, 0, 0, 25, 25, 20, 20], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["GE - Tender Monitor \u2013 Tender Data", "GE - Tender Monitor \u2013 Tender Data", "GE - Tender Monitor \u2013 Tender Data", "GE - Tender Monitor \u2013 Tender Data", "GE - Tender Monitor \u2013 Tender Data", "GE - Tender Monitor \u2013 Tender Data", "GE - Tender Monitor \u2013 Tender Data", "GE - Tender Monitor \u2013 Tender Data", "GE - Tender Monitor \u2013 Tender Data", "GE - Tender Monitor \u2013 Tender Data", "GE - Tender Monitor \u2013 Tender Data", "GE - Tender Monitor \u2013 Tender Data", "GE - Tender Monitor \u2013 Tender Data", "GE - Tender Monitor \u2013 Tender Data", "GE - Tender Monitor \u2013 Tender Data"], "fields_in_concept": ["dataset_id, guarantee_amount, guarantee_period, offer_step, risk_indicators", "contract_value, estimated_value, include_vat", "bidder_x_black_or_white, bidder_x_lowest_bid, num_bidders, num_bids", "", "procurer_code, procurer_name, procurring_entity_id", "", "", "", "cpv_code, sub_codes", "", "", "bidder_x_id, bidder_x_name, supplier_name, winner_code, winning_org_id", "created_at, id, is_new, updated, updated_at", "bid_end_date, bid_start_date, tender_announcement_date, tender_type", "inProgress, tender_registration_number, tender_status, Url_id"]}, "id": "1ca6a017-b965-4991-aa39-ada9e40adcdd"}, "type": "ColumnDataSource", "id": "1ca6a017-b965-4991-aa39-ada9e40adcdd"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "1ca6a017-b965-4991-aa39-ada9e40adcdd"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "f066db0f-00d8-4e23-8a0b-1350547e6963"}, "type": "Glyph", "id": "f066db0f-00d8-4e23-8a0b-1350547e6963"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "1ca6a017-b965-4991-aa39-ada9e40adcdd"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "2a1c6cc4-c0c2-440c-bf09-a2a383103368"}, "type": "Glyph", "id": "2a1c6cc4-c0c2-440c-bf09-a2a383103368"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "da0b8c98-c7a8-43cf-8ddd-cac90a7ffa79"}, "doc": null, "renderers": [], "id": "84c021f0-3a20-463a-bb85-6b5478ade3ad"}, "type": "HoverTool", "id": "84c021f0-3a20-463a-bb85-6b5478ade3ad"}, {"attributes": {"plot": {"type": "Plot", "id": "da0b8c98-c7a8-43cf-8ddd-cac90a7ffa79"}, "id": "ef8f8e0d-1d33-411c-a3db-49f2f60e8878", "doc": null}, "type": "ResizeTool", "id": "ef8f8e0d-1d33-411c-a3db-49f2f60e8878"}, {"attributes": {"plot": {"type": "Plot", "id": "da0b8c98-c7a8-43cf-8ddd-cac90a7ffa79"}, "id": "3fe69c9b-7720-4e0b-b73d-81aaa0459d04", "doc": null}, "type": "PreviewSaveTool", "id": "3fe69c9b-7720-4e0b-b73d-81aaa0459d04"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "4c9a7873-d951-49c8-a615-619c38bfb6c4"}, "y_range": {"type": "FactorRange", "id": "ec21360f-a38b-4918-b2d8-c4021a8991f0"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "539bece2-e046-4603-95b1-0242295a96e9"}, {"type": "Grid", "id": "ba5a4435-1307-42e9-b0c5-97a836eeb724"}, {"type": "CategoricalAxis", "id": "184d80f8-1272-4759-83c0-44d3dc0d6360"}, {"type": "Grid", "id": "d7a97e0e-29a8-4350-97ec-32346bb2cdee"}, {"type": "Glyph", "id": "f066db0f-00d8-4e23-8a0b-1350547e6963"}, {"type": "Glyph", "id": "2a1c6cc4-c0c2-440c-bf09-a2a383103368"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "da0b8c98-c7a8-43cf-8ddd-cac90a7ffa79", "title": null, "tools": [{"type": "HoverTool", "id": "84c021f0-3a20-463a-bb85-6b5478ade3ad"}, {"type": "ResizeTool", "id": "ef8f8e0d-1d33-411c-a3db-49f2f60e8878"}, {"type": "PreviewSaveTool", "id": "3fe69c9b-7720-4e0b-b73d-81aaa0459d04"}], "canvas_width": 1200}, "type": "Plot", "id": "da0b8c98-c7a8-43cf-8ddd-cac90a7ffa79"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "da0b8c98-c7a8-43cf-8ddd-cac90a7ffa79"}], "id": "a5af85cb-628b-48b3-8c85-3800cbe9e105"}, "type": "PlotContext", "id": "a5af85cb-628b-48b3-8c85-3800cbe9e105"}];
    var modeltype = "PlotContext";
    var elementid = "bd6003d7-f5e8-49cf-a9ca-965cf38a7b58";
    var plotID = "da0b8c98-c7a8-43cf-8ddd-cac90a7ffa79";
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
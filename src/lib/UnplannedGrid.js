import React from "react";
import { renderToString } from "react-dom/server";
import { Grid } from "bryntum-schedulerpro/schedulerpro.umd";
import {
  UnplannedGridRowLeftColumn,
  UnplannedGridRowRightColumn,
} from "./UnplannedGridRow";

export default class UnplannedGrid extends Grid {
  static get $name() {
    return "UnplannedGrid";
  }

  static get defaultConfig() {
    return {
      features: {
        stripe: true,
        sort: "name",
      },

      columns: [
        {
          text: "Unassigned tasks",
          flex: 1,
          field: "name",
          htmlEncode: false,
          renderer: (data) => {
            return renderToString(
              <UnplannedGridRowLeftColumn data={data.record} />
            );
          },
        },
        {
          text: "Duration",
          width: 100,
          align: "right",
          editor: false,
          field: "duration",
          htmlEncode: false,
          renderer: (data) => {
            return renderToString(
              <UnplannedGridRowRightColumn data={data.record} />
            );
          },
        },
      ],

      rowHeight: 57,
    };
  }

  construct(config) {
    super.construct(config);
    this.eventStore.on({
      update: ({ record, changes }) => {
        if ("resourceId" in changes && !record.resourceId) {
          this.eventStore.remove(record);
          this.store.add(record);
        }
      },
      thisObj: this,
    });
  }
}

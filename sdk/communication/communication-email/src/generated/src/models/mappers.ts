/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const EmailSendResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailSendResult",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "String"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const EmailMessage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailMessage",
    modelProperties: {
      headers: {
        serializedName: "headers",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      senderAddress: {
        serializedName: "senderAddress",
        required: true,
        type: {
          name: "String"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "Composite",
          className: "EmailContent"
        }
      },
      recipients: {
        serializedName: "recipients",
        type: {
          name: "Composite",
          className: "EmailRecipients"
        }
      },
      attachments: {
        serializedName: "attachments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmailAttachment"
            }
          }
        }
      },
      replyTo: {
        serializedName: "replyTo",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmailAddress"
            }
          }
        }
      },
      disableUserEngagementTracking: {
        serializedName: "disableUserEngagementTracking",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const EmailContent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailContent",
    modelProperties: {
      subject: {
        serializedName: "subject",
        required: true,
        type: {
          name: "String"
        }
      },
      plainText: {
        serializedName: "plainText",
        type: {
          name: "String"
        }
      },
      html: {
        serializedName: "html",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EmailRecipients: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailRecipients",
    modelProperties: {
      to: {
        serializedName: "to",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmailAddress"
            }
          }
        }
      },
      cc: {
        serializedName: "cc",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmailAddress"
            }
          }
        }
      },
      bcc: {
        serializedName: "bcc",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmailAddress"
            }
          }
        }
      }
    }
  }
};

export const EmailAddress: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailAddress",
    modelProperties: {
      address: {
        serializedName: "address",
        required: true,
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EmailAttachment: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailAttachment",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      contentType: {
        serializedName: "contentType",
        required: true,
        type: {
          name: "String"
        }
      },
      contentInBase64: {
        serializedName: "contentInBase64",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EmailGetSendResultHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailGetSendResultHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const EmailGetSendResultExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailGetSendResultExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EmailSendHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailSendHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const EmailSendExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailSendExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

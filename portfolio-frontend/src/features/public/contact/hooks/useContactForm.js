/**
 * ==========================================================
 * CONTACT FORM HOOK (BUSINESS LOGIC LAYER)
 * ==========================================================
 *
 * PURPOSE:
 * - Centralized form logic
 * - Decouples UI from behavior
 *
 * RESPONSIBILITIES:
 * - Manage form state
 * - Handle input changes
 * - Validate fields
 * - Handle submission lifecycle
 *
 * INPUT:
 * @param {Array} fields   -> form schema
 * @param {Object} messages -> validation + feedback messages
 *
 * OUTPUT:
 * - formData
 * - loading state
 * - handlers (change, submit)
 *
 * VALIDATION:
 * - Required field validation
 * - Extensible for custom rules
 *
 * SIDE EFFECTS:
 * - Uses toast notifications
 *
 * SCALABILITY:
 * - Replace mock API with real backend
 * - Extend with async validation
 *
 * DO NOT:
 * - Do NOT access DOM
 * - Do NOT include UI rendering
 *
 * ==========================================================
 */

import { useState } from "react";
import toast from "react-hot-toast";

export const useContactForm = (fields, messages) => {
  //  dynamic initial state
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  //  handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //  validation
  const validate = () => {
    const emptyField = fields.find(
      (field) => field.required && !formData[field.name].trim()
    );

    if (emptyField) {
      toast.error(`${emptyField.label} is required`);
      return false;
    }

    return true;
  };

  //  submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    // mock API
    setTimeout(() => {
      toast.success(messages.success);

      setFormData(initialState);
      setLoading(false);
    }, 1200);
  };

  return {
    formData,
    loading,
    handleChange,
    handleSubmit,
  };
};